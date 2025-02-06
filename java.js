let currentPage = 1;
const totalPages = 12;

document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

function showPage(pageNumber) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    let pageToShow = document.getElementById('page' + pageNumber);
    if (pageToShow) {
        pageToShow.style.display = 'block';
    }
}

// Adjust background music volume
function adjustVolume(value) {
    document.getElementById('bg-music').volume = value;
}

// Play/Pause/Seek music functionality
document.getElementById('playBtn').addEventListener('click', function() {
    document.getElementById('bg-music').play();
});

document.getElementById('pauseBtn').addEventListener('click', function() {
    document.getElementById('bg-music').pause();
});

document.getElementById('seekBackward').addEventListener('click', function() {
    let audio = document.getElementById('bg-music');
    audio.currentTime -= 10;
});

document.getElementById('seekForward').addEventListener('click', function() {
    let audio = document.getElementById('bg-music');
    audio.currentTime += 10;
});

// Automatically change pages based on time of audio
document.getElementById('bg-music').addEventListener('timeupdate', function() {
    const currentTime = this.currentTime;

    // Page transitions based on time
    if (currentTime >= 46 && currentTime < 50) {
        if (currentPage !== 2) {
            currentPage = 2;
            showPage(currentPage);
        }
    }

    if (currentTime >= 50 && currentTime < 57) {
        if (currentPage !== 4) {
            currentPage = 4;
            showPage(currentPage);
        }
    }

    if (currentTime >= 57 && currentTime < 61) {
        if (currentPage !== 5) {
            currentPage = 5;
            showPage(currentPage);
        }
    }

    if (currentTime >= 61 && currentTime < 64) {
        if (currentPage !== 6) {
            currentPage = 6;
            showPage(currentPage);
        }
    }

    if (currentTime >= 64 && currentTime < 68) {
        if (currentPage !== 7) {
            currentPage = 7;
            showPage(currentPage);
        }
    }

    if (currentTime >= 68 && currentTime < 69) {
        if (currentPage !== 8) {
            currentPage = 8;
            showPage(currentPage);
        }
    }

    if (currentTime >= 71 && currentTime < 73) {
        if (currentPage !== 9) {
            currentPage = 9;
            showPage(currentPage);
        }
    }

    if (currentTime >= 72 && currentTime < 75) {
        if (currentPage !== 10) {
            currentPage = 10;
            showPage(currentPage);
        }
    }

    if (currentTime >= 77 && currentTime < 80) {
        if (currentPage !== 11) {
            currentPage = 11;
            showPage(currentPage);
        }
    }

    if (currentTime >= 79 && currentTime < 80) {
        if (currentPage !== 12) {
            currentPage = 12;
            showPage(currentPage);
        }
    }
});

// Show the first page on load
window.onload = function() {
    showPage(currentPage);
};

// Handle the Yes/No buttons on Page 12
document.getElementById('yesBtn').addEventListener('click', function() {
    showResult('I love you', 'happy.gif'); // Replace with actual image path
});

document.getElementById('noBtn').addEventListener('click', function() {
    showResult('NOOOOOOO!!!', 'sadcinamon.gif'); // Replace with actual image path
});

// Display the result (Yes/No responses)
function showResult(message, image) {
    // Hide Page 12 content
    document.getElementById('page12').style.display = 'none';

    // Create a new result page and display it
    let resultPage = document.createElement('div');
    resultPage.className = 'result';
    resultPage.innerHTML = `
        <div class="message-content">
            <img id="resultImage" src="${image}" alt="Result Image" class="result-image">
            <p id="resultMessage" class="result-lyrics">${message}</p>
        </div>
    `;

    document.body.appendChild(resultPage);
}