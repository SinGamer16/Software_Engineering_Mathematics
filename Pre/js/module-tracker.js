// Module Tracker - Handles progress tracking for learning modules
class ModuleTracker {
    constructor() {
        this.currentModule = 'discrete-math-1';
        this.lessons = {
            1: { completed: false, title: 'What is a Set?' },
            2: { completed: false, title: 'Set Operations' },
            3: { completed: false, title: 'Special Sets and Properties' }
        };
        this.practiceProblems = {
            1: { solved: false },
            2: { solved: false },
            3: { solved: false },
            4: { solved: false },
            5: { solved: false },
            6: { solved: false }
        };

        this.init();
    }

    init() {
        this.loadProgress();
        this.bindEvents();
        this.updateUI();
    }

    bindEvents() {
        // Lesson completion buttons
        document.querySelectorAll('.lesson-complete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lessonId = parseInt(e.target.dataset.lesson);
                this.markLessonComplete(lessonId);
            });
        });

        // Practice problem solution buttons
        document.querySelectorAll('.show-solution-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const problemId = e.target.dataset.problem;
                this.showSolution(problemId);
            });
        });

        // Navigation links
        document.querySelectorAll('.lesson-nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const lessonId = e.target.dataset.lesson;
                this.scrollToLesson(lessonId);
            });
        });

        // Module completion check
        this.checkModuleCompletion();
    }

    markLessonComplete(lessonId) {
        this.lessons[lessonId].completed = true;
        this.saveProgress();
        this.updateUI();

        // Show success animation
        this.showCompletionAnimation(lessonId);

        // Check if module is complete
        this.checkModuleCompletion();
    }

    showSolution(problemId) {
        const solution = document.getElementById(`solution-${problemId}`);
        const button = document.querySelector(`[data-problem="${problemId}"]`);

        if (solution.style.display === 'none') {
            solution.style.display = 'block';
            button.textContent = 'Hide Solution';
            this.practiceProblems[problemId].solved = true;
        } else {
            solution.style.display = 'none';
            button.textContent = 'Show Solution';
        }

        this.saveProgress();
        this.updateUI();
    }

    scrollToLesson(lessonId) {
        const lessonElement = document.getElementById(`lesson-${lessonId}`);
        if (lessonElement) {
            lessonElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Update navigation active state
            document.querySelectorAll('.lesson-nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`[data-lesson="${lessonId}"]`).classList.add('active');
        }
    }

    updateUI() {
        // Update lesson status indicators
        Object.keys(this.lessons).forEach(lessonId => {
            const statusElement = document.querySelector(`#lesson-${lessonId} .lesson-status`);
            const navLink = document.querySelector(`[data-lesson="${lessonId}"]`);

            if (this.lessons[lessonId].completed) {
                statusElement.textContent = '✓';
                statusElement.dataset.status = 'completed';
                statusElement.classList.add('completed');
                if (navLink) navLink.classList.add('completed');
            } else {
                statusElement.textContent = '○';
                statusElement.dataset.status = 'not-started';
                statusElement.classList.remove('completed');
                if (navLink) navLink.classList.remove('completed');
            }
        });

        // Update progress bar
        const completedLessons = Object.values(this.lessons).filter(lesson => lesson.completed).length;
        const totalLessons = Object.keys(this.lessons).length;
        const progressPercentage = (completedLessons / totalLessons) * 100;

        const progressBar = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');

        if (progressBar) {
            progressBar.style.width = `${progressPercentage}%`;
        }
        if (progressText) {
            progressText.textContent = `${Math.round(progressPercentage)}% Complete`;
        }

        // Update learning objectives
        this.updateLearningObjectives();
    }

    updateLearningObjectives() {
        const objectives = document.querySelectorAll('.learning-objectives-sidebar li');
        const completedLessons = Object.values(this.lessons).filter(lesson => lesson.completed).length;

        // Mark objectives as complete based on lesson progress
        objectives.forEach((obj, index) => {
            if (index < completedLessons) {
                obj.classList.add('completed');
            } else {
                obj.classList.remove('completed');
            }
        });
    }

    checkModuleCompletion() {
        const allLessonsCompleted = Object.values(this.lessons).every(lesson => lesson.completed);
        const completionSection = document.getElementById('next');

        if (allLessonsCompleted && completionSection) {
            completionSection.style.display = 'block';
            this.showModuleCompletionAnimation();
        }
    }

    showCompletionAnimation(lessonId) {
        const lessonCard = document.getElementById(`lesson-${lessonId}`);
        lessonCard.classList.add('completed-animation');

        setTimeout(() => {
            lessonCard.classList.remove('completed-animation');
        }, 1000);
    }

    showModuleCompletionAnimation() {
        const completionSection = document.getElementById('next');
        completionSection.classList.add('completion-animation');

        // Trigger confetti or celebration effect
        this.celebrateCompletion();
    }

    celebrateCompletion() {
        // Simple celebration animation
        const celebration = document.createElement('div');
        celebration.className = 'celebration-effect';
        celebration.innerHTML = '🎉 🎊 ✨ 🌟 🎈 🎆';
        document.body.appendChild(celebration);

        setTimeout(() => {
            document.body.removeChild(celebration);
        }, 3000);
    }

    saveProgress() {
        const progress = {
            module: this.currentModule,
            lessons: this.lessons,
            practiceProblems: this.practiceProblems,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem(`module-progress-${this.currentModule}`, JSON.stringify(progress));
    }

    loadProgress() {
        const savedProgress = localStorage.getItem(`module-progress-${this.currentModule}`);
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            this.lessons = { ...this.lessons, ...progress.lessons };
            this.practiceProblems = { ...this.practiceProblems, ...progress.practiceProblems };
        }
    }

    getProgressStats() {
        const completedLessons = Object.values(this.lessons).filter(lesson => lesson.completed).length;
        const solvedProblems = Object.values(this.practiceProblems).filter(problem => problem.solved).length;

        return {
            lessonsCompleted: completedLessons,
            totalLessons: Object.keys(this.lessons).length,
            problemsSolved: solvedProblems,
            totalProblems: Object.keys(this.practiceProblems).length,
            progressPercentage: (completedLessons / Object.keys(this.lessons).length) * 100
        };
    }
}

// Share progress functionality
function shareProgress() {
    const stats = window.moduleTracker.getProgressStats();
    const shareText = `I just completed Module 1: Introduction to Sets in Software Engineering Mathematics! ${stats.lessonsCompleted}/${stats.totalLessons} lessons done. Check it out!`;

    if (navigator.share) {
        navigator.share({
            title: 'Software Engineering Mathematics Progress',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(`${shareText} ${window.location.href}`).then(() => {
            alert('Progress shared to clipboard!');
        });
    }
}

// Initialize module tracker when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.moduleTracker = new ModuleTracker();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModuleTracker;
}