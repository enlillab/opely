class SpeechRecognizer:
    recordings = 0
    words = 0
    commands = 0

    def record(self):
        self.recordings += 1

    def recognize_word(self):
        self.words += 1

    def detect_command(self):
        self.commands += 1

    def show_status(self):
        print("Recordings:", self.recordings)
        print("Words:", self.words)
        print("Commands:", self.commands)

assistant1 = SpeechRecognizer()

assistant1.record()
assistant1.recognize_word()
assistant1.recognize_word()
assistant1.detect_command()

assistant1.show_status()