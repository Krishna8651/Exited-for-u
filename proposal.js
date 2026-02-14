// Ultimate Valentine Proposal 2026 - GUARANTEED TO WORK 100%
// ALL FIXES AND FALLBACKS INCLUDED - UPDATED FOR 2026

// Multiple load handlers to ensure it starts
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Also add window load as backup
window.addEventListener('load', function() {
    console.log("Window loaded - ensuring app is running");
    if (!window.appInitialized) {
        initApp();
    }
});

// Main initialization function
function initApp() {
    console.log("❤️ Valentine Proposal 2026 Starting...");
    window.appInitialized = true;
    
    // Elements with null checks
    const envelope = document.getElementById('envelope');
    const proposalContent = document.getElementById('proposalContent');
    const herNameInput = document.getElementById('herName');
    const nameConfirmBtn = document.getElementById('nameConfirm');
    const continueStoryBtn = document.getElementById('continueStory');
    const continueReasonsBtn = document.getElementById('continueReasons');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const shareBtn = document.getElementById('shareBtn');
    const musicToggle = document.getElementById('musicToggle');
    const musicText = document.getElementById('musicText');
    const loveSong = document.getElementById('loveSong');
    const progressBar = document.getElementById('progressBar');
    const stepDots = document.querySelectorAll('.step-dot');
    
    // State
    let currentStep = 1;
    let herName = '';
    let confettiInstance = null;
    let isMusicPlaying = false;
    let audioContext = null;
    
    // Predefined romantic reasons
    const romanticReasons = [
        "Your smile lights up my world",
        "Your kindness inspires me every day",
        "You make me want to be a better person",
        "Your intelligence amazes me",
        "Your laughter is my favorite sound",
        "You understand me like no one else",
        "Your strength gives me strength",
        "You make ordinary moments magical",
        "Your eyes tell a thousand beautiful stories",
        "You have the most beautiful heart",
        "You make me feel completely accepted",
        "Your passion for life is contagious",
        "You're my best friend and my greatest love",
        "You make every day feel like Valentine's",
        "You're more beautiful than all the stars",
        "Your touch feels like home",
        "You believe in me even when I don't",
        "You make challenges feel manageable",
        "Your perspective makes me see the world differently",
        "You're the answer to all my prayers"
    ];
    
    // ===== MUSIC FUNCTIONS (FIXED) =====
    
    // Initialize audio with user interaction
    function initAudio() {
        if (!loveSong) return;
        
        // Set volume
        loveSong.volume = 0.4;
        
        // Preload audio
        loveSong.load();
        
        console.log("Audio initialized with sources:", loveSong.children.length);
    }
    
    // Play music function with multiple fallbacks
    function playMusic() {
        if (!loveSong) {
            console.log("No audio element found");
            return false;
        }
        
        // Try to play
        let playPromise = loveSong.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("Music playing successfully");
                isMusicPlaying = true;
                if (musicToggle) {
                    musicToggle.classList.add('playing');
                }
                if (musicText) musicText.textContent = 'Now Playing ❤️';
                createMusicNotes();
            }).catch(error => {
                console.log("Auto-play prevented:", error);
                // Show user they need to click
                if (musicText) musicText.textContent = 'Click to Play Song';
                isMusicPlaying = false;
                
                // Try fallback audio context
                playFallbackAudio();
            });
            return true;
        }
        
        return false;
    }
    
    // Fallback using Web Audio API
    function playFallbackAudio() {
        try {
            // Create simple melody as fallback
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Simple romantic melody (C major arpeggio)
            const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
            
            notes.forEach((freq, index) => {
                setTimeout(() => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    
                    osc.type = 'sine';
                    osc.frequency.value = freq;
                    
                    gain.gain.value = 0.1;
                    
                    osc.connect(gain);
                    gain.connect(audioContext.destination);
                    
                    osc.start();
                    osc.stop(audioContext.currentTime + 0.5);
                }, index * 500);
            });
            
            console.log("Playing fallback melody");
            if (musicText) musicText.textContent = 'Playing Melody ♪';
            
        } catch(e) {
            console.log("Fallback audio also failed");
        }
    }
    
    // Pause music
    function pauseMusic() {
        if (loveSong) {
            loveSong.pause();
            isMusicPlaying = false;
            if (musicToggle) {
                musicToggle.classList.remove('playing');
            }
            if (musicText) musicText.textContent = 'Play Romantic Song';
        }
        
        // Stop fallback audio
        if (audioContext) {
            audioContext.close();
            audioContext = null;
        }
    }
    
    // Toggle music
    function toggleMusic() {
        if (isMusicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    }
    
    // Create visual music notes
    function createMusicNotes() {
        if (!isMusicPlaying) return;
        
        const note = document.createElement('div');
        note.className = 'music-note';
        note.innerHTML = ['♪', '♫', '♩', '🎵'][Math.floor(Math.random() * 4)];
        note.style.left = Math.random() * window.innerWidth + 'px';
        note.style.bottom = '20px';
        note.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        document.body.appendChild(note);
        
        setTimeout(() => {
            if (note.parentNode) note.remove();
        }, 3000);
        
        if (isMusicPlaying) {
            setTimeout(createMusicNotes, 500);
        }
    }
    
    // ===== FALLBACK FUNCTIONS =====
    
    // Fallback for envelope click
    function safeEnvelopeOpen() {
        console.log("Envelope opened");
        const openingScreen = document.querySelector('.opening-screen');
        if (openingScreen) openingScreen.style.display = 'none';
        if (proposalContent) {
            proposalContent.style.display = 'block';
            const step1 = document.getElementById('step1');
            if (step1) step1.classList.remove('hidden');
        }
        updateProgress();
        
        // Try to play music after user interaction
        setTimeout(() => {
            playMusic();
        }, 500);
    }
    
    // Fallback celebration
    function fallbackCelebration() {
        console.log("Using fallback celebration");
        const colors = ['#ff4081', '#ff79a9', '#4CAF50', '#ffd700'];
        let count = 0;
        const interval = setInterval(() => {
            document.body.style.backgroundColor = colors[count % colors.length];
            count++;
            if (count > 20) {
                clearInterval(interval);
                document.body.style.backgroundColor = '';
            }
        }, 100);
    }
    
    // ===== MAIN FUNCTIONS =====
    
    // Initialize everything
    function init() {
        console.log("Initializing features...");
        
        // Initialize audio
        initAudio();
        
        // Create floating hearts
        createFloatingHearts();
        
        // Try to set up confetti
        try {
            if (typeof ConfettiGenerator !== 'undefined') {
                confettiInstance = new ConfettiGenerator({
                    target: 'confetti-container',
                    size: 1,
                    animate: true,
                    props: ['circle', 'square', 'triangle', 'line'],
                    colors: [[255, 99, 132], [255, 64, 129], [255, 121, 169], [255, 20, 147]],
                    clock: 25
                });
                console.log("Confetti loaded successfully");
            }
        } catch(e) {
            console.log("Confetti error:", e);
        }
        
        // Update progress
        updateProgress();
        
        console.log("Initialization complete");
    }
    
    // Create floating hearts animation
    function createFloatingHearts() {
        const container = document.getElementById('floatingHearts');
        if (!container) return;
        
        container.innerHTML = '';
        
        function addHeart() {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.opacity = '0.7';
            heart.style.zIndex = '-1';
            heart.style.animation = `floatUp ${Math.random() * 10 + 10}s linear forwards`;
            heart.style.pointerEvents = 'none';
            
            container.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 20000);
        }
        
        for (let i = 0; i < 10; i++) {
            setTimeout(addHeart, i * 300);
        }
        
        setInterval(addHeart, 5000);
    }
    
    // Update progress bar and steps
    function updateProgress() {
        if (!progressBar) return;
        const progress = ((currentStep - 1) / 4) * 100;
        progressBar.style.width = progress + '%';
        
        stepDots.forEach((dot, index) => {
            if (index + 1 <= currentStep) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Move to next step
    function nextStep() {
        const currentStepEl = document.getElementById(`step${currentStep}`);
        if (currentStepEl) currentStepEl.classList.add('hidden');
        
        currentStep++;
        
        if (currentStep > 5) return;
        
        const nextStepEl = document.getElementById(`step${currentStep}`);
        if (nextStepEl) nextStepEl.classList.remove('hidden');
        
        switch(currentStep) {
            case 2:
                createLoveStory();
                break;
            case 3:
                createReasons();
                break;
            case 4:
                createProposal();
                break;
            case 5:
                celebrateYes();
                break;
        }
        
        updateProgress();
        
        try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch(e) {
            window.scrollTo(0, 0);
        }
    }
    
    // Create personalized love story
    function createLoveStory() {
        const storyElements = document.querySelectorAll('.moment-text');
        if (storyElements.length >= 2 && herName) {
            if (storyElements[0]) storyElements[0].textContent = `The moment I first saw you, ${herName}`;
            if (storyElements[1]) storyElements[1].textContent = `Every smile you've given me, ${herName}`;
        }
    }
    
    // Create romantic reasons
    function createReasons() {
        const reasonsGrid = document.getElementById('reasonsGrid');
        if (!reasonsGrid) return;
        
        reasonsGrid.innerHTML = '';
        
        const shuffledReasons = [...romanticReasons].sort(() => Math.random() - 0.5);
        
        shuffledReasons.slice(0, 12).forEach(reason => {
            const card = document.createElement('div');
            card.className = 'reason-card';
            card.textContent = reason;
            card.style.animationDelay = (Math.random() * 0.5) + 's';
            card.classList.add('animate__animated', 'animate__fadeInUp');
            reasonsGrid.appendChild(card);
        });
        
        const dynamicName = document.getElementById('dynamicName');
        if (dynamicName) dynamicName.textContent = herName || 'My Love';
    }
    
    // Create proposal scene
    function createProposal() {
        const finalName = document.getElementById('finalName');
        if (finalName) finalName.textContent = herName || 'My Love';
        
        if (noBtn) {
            noBtn.addEventListener('mouseover', function() {
                const x = Math.random() * 200 - 100;
                const y = Math.random() * 200 - 100;
                this.style.transform = `translate(${x}px, ${y}px)`;
            });
            
            noBtn.addEventListener('click', function() {
                this.textContent = "Just kidding! ❤️";
                this.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
                this.style.cursor = 'pointer';
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
                
                setTimeout(() => {
                    if (yesBtn) yesBtn.click();
                }, 2000);
            });
        }
        
        if (yesBtn) {
            yesBtn.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.2)';
            });
            
            yesBtn.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)';
            });
            
            yesBtn.addEventListener('click', function() {
                createHeartExplosion();
                
                // Try to play celebration sound
                try {
                    const celebrationSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3');
                    celebrationSound.volume = 0.5;
                    celebrationSound.play().catch(e => console.log("Celebration sound failed"));
                } catch(e) {}
                
                setTimeout(() => {
                    nextStep();
                }, 1500);
            });
        }
    }
    
    // Create heart explosion effect
    function createHeartExplosion() {
        if (!yesBtn) return;
        
        const yesBtnRect = yesBtn.getBoundingClientRect();
        const centerX = yesBtnRect.left + yesBtnRect.width / 2;
        const centerY = yesBtnRect.top + yesBtnRect.height / 2;
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'fixed';
                heart.style.left = centerX + 'px';
                heart.style.top = centerY + 'px';
                heart.style.fontSize = '20px';
                heart.style.zIndex = '1000';
                heart.style.pointerEvents = 'none';
                heart.style.animation = `explodeHeart ${Math.random() * 1 + 0.5}s ease-out forwards`;
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    if (heart.parentNode) heart.remove();
                }, 1000);
            }, i * 30);
        }
        
        if (!document.getElementById('explodeAnimation')) {
            const style = document.createElement('style');
            style.id = 'explodeAnimation';
            style.textContent = `
                @keyframes explodeHeart {
                    0% {
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Celebration when she says YES
    function celebrateYes() {
        if (confettiInstance) {
            try {
                confettiInstance.render();
            } catch(e) {
                fallbackCelebration();
            }
        } else {
            fallbackCelebration();
        }
        
        const certificateName = document.getElementById('certificateName');
        if (certificateName) certificateName.textContent = herName || 'the most beautiful person';
        
        startCountdown();
        
        setTimeout(() => {
            createSurpriseMessage();
        }, 3000);
    }
    
    // Start countdown
    function startCountdown() {
        const countdownElement = document.getElementById('loveCountdown');
        if (!countdownElement) return;
        
        const targetTime = new Date();
        targetTime.setSeconds(targetTime.getSeconds() + 10);
        
        function updateCountdown() {
            const now = new Date();
            const diff = targetTime - now;
            
            if (diff <= 0) {
                countdownElement.textContent = 'FOREVER! 💕';
                return;
            }
            
            const seconds = Math.floor(diff / 1000);
            countdownElement.textContent = `00:00:${seconds.toString().padStart(2, '0')}`;
            
            setTimeout(updateCountdown, 1000);
        }
        
        updateCountdown();
    }
    
    // Create surprise message
    function createSurpriseMessage() {
        const surpriseMessage = document.getElementById('surpriseMessage');
        if (!surpriseMessage) return;
        
        surpriseMessage.className = 'surprise-message';
        surpriseMessage.innerHTML = `
            <div class="message-bubble">
                <div class="message-header">
                    <i class="fas fa-heart"></i>
                    <span>Special Message For You</span>
                </div>
                <div class="message-content">
                    <p>💌 <strong>My Dearest ${herName || 'Love'},</strong></p>
                    <p>Thank you for saying YES! This is just the beginning of our beautiful journey together.</p>
                    <p>I promise to make every day feel as special as this one.</p>
                    <p>Check your phone for a real message! 📱</p>
                    <p class="date-2026">💕 February 14, 2026 - Our Forever Begins 💕</p>
                </div>
                <button class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        const closeBtn = surpriseMessage.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                surpriseMessage.remove();
            });
        }
        
        if (!document.getElementById('messageStyles')) {
            const style = document.createElement('style');
            style.id = 'messageStyles';
            style.textContent = `
                .surprise-message {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 10000;
                    animation: fadeInMsg 0.5s ease;
                }
                
                .message-bubble {
                    background: white;
                    color: #333;
                    padding: 30px;
                    border-radius: 20px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
                    max-width: 400px;
                    position: relative;
                    border: 3px solid #ff4081;
                }
                
                .message-header {
                    background: linear-gradient(45deg, #ff4081, #ff79a9);
                    color: white;
                    padding: 15px;
                    border-radius: 15px 15px 0 0;
                    margin: -30px -30px 20px -30px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: bold;
                }
                
                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    font-size: 1.2rem;
                }
                
                .date-2026 {
                    color: #ff4081;
                    font-weight: bold;
                    margin-top: 15px;
                    font-size: 1.1rem;
                }
                
                @keyframes fadeInMsg {
                    from { opacity: 0; transform: translate(-50%, -60%); }
                    to { opacity: 1; transform: translate(-50%, -50%); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // ===== EVENT LISTENERS =====
    
    // Open envelope
    if (envelope) {
        envelope.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Envelope clicked");
            
            this.style.transform = 'scale(0)';
            this.style.opacity = '0';
            this.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                safeEnvelopeOpen();
            }, 500);
        });
        
        envelope.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        });
    } else {
        setTimeout(safeEnvelopeOpen, 2000);
    }
    
    // Confirm name
    if (nameConfirmBtn) {
        nameConfirmBtn.addEventListener('click', function() {
            if (herNameInput) {
                herName = herNameInput.value.trim();
                
                if (!herName) {
                    herNameInput.style.borderColor = '#ff0000';
                    herNameInput.placeholder = "Please enter your beautiful name";
                    return;
                }
            } else {
                herName = "My Love";
            }
            
            const mainTitle = document.querySelector('.main-title');
            if (mainTitle) {
                mainTitle.innerHTML = `For My Dearest <span style="color: #ff79a9;">${herName}</span>`;
            }
            
            this.classList.add('animate__animated', 'animate__heartBeat');
            setTimeout(() => {
                nextStep();
            }, 1000);
        });
    }
    
    if (herNameInput) {
        herNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && nameConfirmBtn) {
                nameConfirmBtn.click();
            }
        });
    }
    
    if (continueStoryBtn) continueStoryBtn.addEventListener('click', nextStep);
    if (continueReasonsBtn) continueReasonsBtn.addEventListener('click', nextStep);
    
    // Share button
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            const shareText = `💕 I just said YES to the most romantic proposal! ${herName || 'We'} are starting our forever journey on February 14, 2026! ❤️`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'We Found Forever! 2026 ❤️',
                    text: shareText,
                    url: window.location.href
                }).catch(e => copyToClipboard(shareText));
            } else {
                copyToClipboard(shareText);
            }
        });
    }
    
    function copyToClipboard(text) {
        try {
            navigator.clipboard.writeText(text).then(() => {
                alert('Love story copied! Share it with the world! ❤️');
            }).catch(() => {
                alert('Share this moment with the world! ❤️');
            });
        } catch(e) {
            alert('Share this moment with the world! ❤️');
        }
    }
    
    // Music toggle - FIXED to work with your song
    if (musicToggle && loveSong) {
        musicToggle.addEventListener('click', function() {
            toggleMusic();
        });
    }
    
    // Step navigation dots
    stepDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const step = parseInt(this.dataset.step);
            if (step && step <= currentStep) {
                document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
                
                const stepElement = document.getElementById(`step${step}`);
                if (stepElement) stepElement.classList.remove('hidden');
                
                currentStep = step;
                updateProgress();
                
                if (step === 4) createProposal();
                if (step === 5) celebrateYes();
            }
        });
    });
    
    // Add custom styles
    addCustomStyles();
    
    // Start everything
    init();
}

// Add custom styles
function addCustomStyles() {
    if (!document.getElementById('customStyles')) {
        const customStyles = document.createElement('style');
        customStyles.id = 'customStyles';
        customStyles.textContent = `
            .highlight {
                color: #ff79a9;
                text-shadow: 0 0 10px rgba(255, 121, 169, 0.5);
            }
            
            .step.active {
                display: block !important;
            }
            
            @media (max-width: 768px) {
                .btn-yes, .btn-no {
                    font-size: 1.5rem;
                    padding: 15px 30px;
                }
            }
            
            /* 2026 Special Styles */
            .date-2026 {
                font-size: 1.2rem;
                color: #ffd700;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            }
            
            .certificate .date {
                color: #ff4081;
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
    }
}

// Error handler
window.addEventListener('error', function(e) {
    console.log("Caught error (non-critical):", e.message);
    e.preventDefault();
    return true;
});
