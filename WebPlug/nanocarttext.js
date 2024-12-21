function getRandomText() {
            const texts = [
                "Selamat datang di situs kami!",
                "Semoga harimu menyenangkan!",
                "Terima kasih telah mengunjungi kami!",
                "Nikmati kunjunganmu di sini!",
                "Jangan lupa untuk kembali lagi!"
            ];
            const randomIndex = Math.floor(Math.random() * texts.length);
            return texts[randomIndex];
        }

        function displayRandomText() {
            const textElement = document.getElementById("rotating-text");
            textElement.innerText = getRandomText();
            startRunningText();
        }

        function startRunningText() {
            const textElement = document.getElementById("rotating-text");
            let position = textElement.offsetWidth;
            function moveText() {
                position--;
                textElement.style.left = position + "px";
                if (position < -textElement.offsetWidth) {
                    position = window.innerWidth;
                }
                requestAnimationFrame(moveText);
            }
            moveText();
        }

        window.onload = displayRandomText;
