// Game Development Planner - Main JavaScript
class GameDevPlanner {
    constructor() {
        this.currentUser = 'dev1';
        this.currentAspect = null;
        this.data = this.loadData();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateStats();
    }

    setupEventListeners() {
        // User selection
        document.getElementById('userSelect').addEventListener('change', (e) => {
            this.currentUser = e.target.value;
            this.updateStats();
        });

        // Aspect selection buttons
        document.querySelectorAll('.aspect-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const aspect = e.target.dataset.aspect;
                this.selectAspect(aspect);
            });
        });

        // Close aspect button
        document.getElementById('closeAspect').addEventListener('click', () => {
            this.closeAspect();
        });

        // Add plan button
        document.getElementById('addPlanBtn').addEventListener('click', () => {
            this.addPlan();
        });

        // Add change button
        document.getElementById('addChangeBtn').addEventListener('click', () => {
            this.addChange();
        });

        // Enter key support for textareas
        document.getElementById('planInput').addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.addPlan();
            }
        });

        document.getElementById('changeInput').addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.addChange();
            }
        });
    }

    selectAspect(aspectId) {
        this.currentAspect = aspectId;
        
        // Update UI
        document.querySelectorAll('.aspect-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-aspect="${aspectId}"]`).classList.add('active');

        // Show work area
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('workArea').style.display = 'block';

        // Update aspect title
        const aspectName = document.querySelector(`[data-aspect="${aspectId}"]`).textContent;
        document.getElementById('currentAspectTitle').textContent = aspectName;

        // Initialize aspect data if doesn't exist
        if (!this.data.aspects[aspectId]) {
            this.data.aspects[aspectId] = {
                tasks: [],
                changes: []
            };
        }

        // Render tasks and changes
        this.renderTasks();
        this.renderChangelog();
    }

    closeAspect() {
        this.currentAspect = null;
        document.querySelectorAll('.aspect-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById('welcomeScreen').style.display = 'block';
        document.getElementById('workArea').style.display = 'none';
    }

    addPlan() {
        const planInput = document.getElementById('planInput');
        const prioritySelect = document.getElementById('prioritySelect');
        const description = planInput.value.trim();

        if (!description) {
            alert('Prosím vyplňte popis úkolu.');
            return;
        }

        const task = {
            id: Date.now(),
            description: description,
            priority: prioritySelect.value,
            completed: false,
            createdBy: this.currentUser,
            createdAt: new Date().toISOString(),
            completedAt: null
        };

        this.data.aspects[this.currentAspect].tasks.push(task);
        this.saveData();
        this.renderTasks();
        this.updateStats();

        // Clear input
        planInput.value = '';
        prioritySelect.value = 'medium';
    }

    addChange() {
        const changeInput = document.getElementById('changeInput');
        const description = changeInput.value.trim();

        if (!description) {
            alert('Prosím vyplňte poznámku ke změně.');
            return;
        }

        const change = {
            id: Date.now(),
            description: description,
            user: this.currentUser,
            timestamp: new Date().toISOString()
        };

        this.data.aspects[this.currentAspect].changes.unshift(change);
        this.saveData();
        this.renderChangelog();
        this.updateStats();

        // Clear input
        changeInput.value = '';
    }

    toggleTaskCompletion(taskId) {
        const task = this.data.aspects[this.currentAspect].tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.saveData();
            this.renderTasks();
            this.updateStats();
        }
    }

    deleteTask(taskId) {
        if (confirm('Opravdu chcete smazat tento úkol?')) {
            this.data.aspects[this.currentAspect].tasks = 
                this.data.aspects[this.currentAspect].tasks.filter(t => t.id !== taskId);
            this.saveData();
            this.renderTasks();
            this.updateStats();
        }
    }

    renderTasks() {
        const container = document.getElementById('taskListContainer');
        const tasks = this.data.aspects[this.currentAspect].tasks;

        if (tasks.length === 0) {
            container.innerHTML = '<p class="empty-message">Zatím nejsou žádné úkoly. Přidejte první plán!</p>';
            return;
        }

        // Sort tasks: incomplete first, then by priority, then by date
        const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        const sortedTasks = [...tasks].sort((a, b) => {
            if (a.completed !== b.completed) return a.completed ? 1 : -1;
            if (a.priority !== b.priority) return priorityOrder[a.priority] - priorityOrder[b.priority];
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        container.innerHTML = sortedTasks.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''} ${task.priority === 'high' ? 'high-priority' : ''} ${task.priority === 'critical' ? 'critical-priority' : ''}">
                <div class="task-header">
                    <div class="task-content">
                        <div class="task-description">
                            <input type="checkbox" 
                                   class="task-checkbox" 
                                   ${task.completed ? 'checked' : ''}
                                   onchange="planner.toggleTaskCompletion(${task.id})">
                            ${task.completed ? '<s>' : ''}${this.escapeHtml(task.description)}${task.completed ? '</s>' : ''}
                        </div>
                        <div class="task-meta">
                            <span class="priority-badge priority-${task.priority}">
                                ${this.getPriorityLabel(task.priority)}
                            </span>
                            <span>👤 ${task.createdBy === 'dev1' ? 'Jack' : 'Joker'}</span>
                            <span>📅 ${this.formatDate(task.createdAt)}</span>
                            ${task.completed ? `<span>✅ ${this.formatDate(task.completedAt)}</span>` : ''}
                        </div>
                    </div>
                </div>
                <div class="task-actions">
                    ${!task.completed ? `<button class="btn-success" onclick="planner.toggleTaskCompletion(${task.id})">✓ Dokončit</button>` : ''}
                    <button class="btn-danger" onclick="planner.deleteTask(${task.id})">🗑 Smazat</button>
                </div>
            </div>
        `).join('');
    }

    renderChangelog() {
        const container = document.getElementById('changelogContainer');
        const changes = this.data.aspects[this.currentAspect].changes;

        if (changes.length === 0) {
            container.innerHTML = '<p class="empty-message">Zatím nejsou žádné změny zaznamenány.</p>';
            return;
        }

        container.innerHTML = changes.map(change => `
            <div class="changelog-item">
                <div class="changelog-header">
                    <span class="changelog-user">
                        ${change.user === 'dev1' ? '👤 Jack' : '👤 Joker'}
                    </span>
                    <span>📅 ${this.formatDateTime(change.timestamp)}</span>
                </div>
                <div class="changelog-content">
                    ${this.escapeHtml(change.description)}
                </div>
            </div>
        `).join('');
    }

    updateStats() {
        const allTasks = [];
        const activeAspects = new Set();

        Object.keys(this.data.aspects).forEach(aspectId => {
            const aspect = this.data.aspects[aspectId];
            if (aspect.tasks.length > 0 || aspect.changes.length > 0) {
                activeAspects.add(aspectId);
            }
            allTasks.push(...aspect.tasks);
        });

        const completedTasks = allTasks.filter(t => t.completed).length;

        document.getElementById('totalTasks').textContent = allTasks.length;
        document.getElementById('completedTasks').textContent = completedTasks;
        document.getElementById('activeAspects').textContent = activeAspects.size;
    }

    getPriorityLabel(priority) {
        const labels = {
            low: 'Nízká',
            medium: 'Střední',
            high: 'Vysoká',
            critical: 'Kritická'
        };
        return labels[priority] || priority;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('cs-CZ', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    formatDateTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString('cs-CZ', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    loadData() {
        const saved = localStorage.getItem('gameDevPlannerData');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Error loading data:', e);
            }
        }
        return {
            aspects: {}
        };
    }

    saveData() {
        try {
            localStorage.setItem('gameDevPlannerData', JSON.stringify(this.data));
        } catch (e) {
            console.error('Error saving data:', e);
            alert('Nepodařilo se uložit data. Zkontrolujte prosím paměť prohlížeče.');
        }
    }

    // Export functionality
    exportData() {
        const dataStr = JSON.stringify(this.data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `game-dev-planner-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // Import functionality
    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                if (confirm('Opravdu chcete importovat data? Stávající data budou přepsána.')) {
                    this.data = imported;
                    this.saveData();
                    this.updateStats();
                    if (this.currentAspect) {
                        this.renderTasks();
                        this.renderChangelog();
                    }
                    alert('Data byla úspěšně importována!');
                }
            } catch (err) {
                alert('Chyba při importu dat: ' + err.message);
            }
        };
        reader.readAsText(file);
    }
}

// Initialize the planner
let planner;
document.addEventListener('DOMContentLoaded', () => {
    planner = new GameDevPlanner();
});
