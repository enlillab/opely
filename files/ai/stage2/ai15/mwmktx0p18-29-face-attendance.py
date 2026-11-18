class FaceAttendance:
    scanned_faces = 0
    recognized_faces = 0
    attendance = 0

    def scan_face(self):
        self.scanned_faces += 1

    def recognize_face(self):
        self.recognized_faces += 1

    def mark_attendance(self):
        self.attendance += 1

    def show_status(self):
        print("Scanned Faces:", self.scanned_faces)
        print("Recognized Faces:", self.recognized_faces)
        print("Attendance:", self.attendance)

system1 = FaceAttendance()

system1.scan_face()
system1.recognize_face()
system1.mark_attendance()

system1.scan_face()
system1.recognize_face()
system1.mark_attendance()

system1.show_status()