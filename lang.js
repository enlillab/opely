/* =====================================================================
   OPELY — languages, shared by every page

   The pages are written in English. This file shows them in the language
   of the visitor's device when a translation exists below, and turns the
   whole page right-to-left for languages that are written that way.

   How it works: the English text itself is the key. t("Files") gives
   "الملفات" on an Arabic device and "Files" everywhere else.

   To add a language: add its two-letter code to TRANSLATIONS with the same
   keys as "ar", add its words to COUNT_WORDS, and add it to RIGHT_TO_LEFT
   if it is written right to left. Nothing else needs to change.

   Only the interface is translated. Course names, lecture titles, and
   announcements appear exactly as the admins typed them.
   ===================================================================== */

const TRANSLATIONS = {
  ar: {
    // ----- shared -----
    ", ": "، ",
    "Admin": "الإدارة",
    "Stage {n}": "المرحلة {n}",
    "Stage 1": "المرحلة الأولى",
    "Stage 2": "المرحلة الثانية",
    "Stage 3": "المرحلة الثالثة",
    "Stage 4": "المرحلة الرابعة",
    "Semester {n}": "الفصل {n}",
    "Semester 1": "الفصل الأول",
    "Semester 2": "الفصل الثاني",
    "Semester": "الفصل الدراسي",
    "Lectures": "المحاضرات",
    "Sources": "المصادر",
    "Announcements": "الإعلانات",
    "Announcement": "إعلان",
    "No announcements yet.": "لا توجد إعلانات بعد.",
    "No lectures yet.": "لا توجد محاضرات بعد.",
    "No sources yet.": "لا توجد مصادر بعد.",
    "Not added yet": "لم يُضف بعد",
    "Page not found": "الصفحة غير موجودة",
    "Department": "القسم",
    "Stage": "المرحلة",

    // ----- student page -----
    "Saved": "محفوظ",
    "Latest": "الأحدث",
    "No departments yet.": "لا توجد أقسام بعد.",
    "Source": "مصدر",
    "Lecture": "محاضرة",
    "Course source": "مصدر للمادة",
    "Lecture or source": "محاضرة أو مصدر",
    "Open on the student site": "افتح في موقع الطلبة",
    "How it works": "كيف يعمل",
    "Split": "فصل",
    "Files in the same folder become one lecture, named after the folder.": "الملفات الموجودة في المجلد نفسه تصبح محاضرة واحدة باسم المجلد.",
    "Files outside any folder each become their own lecture, named after the file.": "الملفات خارج أي مجلد تصبح كل منها محاضرة مستقلة باسم الملف.",
    "Before uploading, you can Split a lecture into one per file, Move files, rename lectures, or turn a lecture into a source.": "قبل الرفع، يمكنك فصل محاضرة إلى محاضرة لكل ملف، أو نقل الملفات، أو تغيير الأسماء، أو تحويل محاضرة إلى مصدر.",
    "Tap Split to make one lecture per file, Move to put a file in another card, or Lecture and Source to switch a card.": "اضغط «فصل» لجعل كل ملف محاضرة، أو «نقل» لوضع ملف في بطاقة أخرى، أو «محاضرة» و«مصدر» لتبديل البطاقة.",
    "Wrap long lines": "التفاف الأسطر الطويلة",
    "Smaller text": "تصغير النص",
    "Bigger text": "تكبير النص",
    "Full screen": "ملء الشاشة",
    "Done": "تم",
    "Copy": "نسخ",
    "Copied": "نُسخ",
    "Can’t copy here": "لا يمكن النسخ هنا",
    "Text": "نص",
    "Picture": "صورة",
    "Jupyter notebook": "دفتر Jupyter",
    "What this becomes": "ماذا يصبح",
    "Choose Lecture, Lab or Source on each card. Split makes one card per file, and Move puts a file in another card.": "اختر «محاضرة» أو «مختبر» أو «مصدر» في كل بطاقة. «فصل» يجعل كل ملف بطاقة، و«نقل» يضع ملفاً في بطاقة أخرى.",
    "Choose Lecture or Source on each card. Split makes one card per file, and Move puts a file in another card.": "اختر «محاضرة» أو «مصدر» في كل بطاقة. «فصل» يجعل كل ملف بطاقة، و«نقل» يضع ملفاً في بطاقة أخرى.",
    "Search": "بحث",
    "Courses, lectures, labs, files": "مواد، محاضرات، مختبرات، ملفات",
    "Search every course, lecture, lab, file and announcement.": "ابحث في كل المواد والمحاضرات والمختبرات والملفات والإعلانات.",
    "Nothing found. Try other words.": "لم يُعثر على شيء. جرّب كلمات أخرى.",
    "Courses": "المواد",
    "Files": "الملفات",
    "Announcements": "الإعلانات",
    "My stage": "مرحلتي",
    "Make this my stage": "اجعلها مرحلتي",
    "Remove": "إزالة",
    "Save for offline": "حفظ للتصفح دون اتصال",
    "Checking…": "جارٍ التحقق…",
    "All {n} files are saved in this browser.": "كل الملفات ({n}) محفوظة في هذا المتصفح.",
    "{saved} of {n} files saved": "{saved} من {n} ملفات محفوظة",
    "Tap again to remove this course’s saved files.": "اضغط مرة أخرى لحذف ملفات هذه المادة المحفوظة.",
    "Saving {i} of {n}…": "جارٍ حفظ {i} من {n}…",
    "{n} couldn’t be saved. Check your connection.": "تعذّر حفظ {n}. تحقق من اتصالك.",
    "Edit": "تعديل",
    "Edit lecture": "تعديل المحاضرة",
    "Edit lab": "تعديل المختبر",
    "Will be removed": "سيُحذف",
    "Undo": "تراجع",
    "Add files": "إضافة ملفات",
    "Reorder": "ترتيب",
    "Move up": "تحريك للأعلى",
    "Move down": "تحريك للأسفل",
    "Save order": "حفظ الترتيب",
    "Ended": "انتهى",
    "Until {date}": "حتى {date}",
    "Show until (optional)": "يظهر حتى (اختياري)",
    "After this day, students no longer see it. You still do.": "بعد هذا اليوم لا يراه الطلبة، لكنك تراه.",
    "Edit announcement": "تعديل الإعلان",
    "Sent to: {who}": "أُرسل إلى: {who}",
    "New": "جديد",
    "{n} new": "{n} جديد",
    "Share": "مشاركة",
    "Link copied": "نُسخ الرابط",
    "Time": "الوقت",
    "Exam or event (optional)": "امتحان أو موعد (اختياري)",
    "Students see a countdown to it, like “Midterm in 5 days”.": "يرى الطلبة عداً تنازلياً له، مثل «امتحان نصف الفصل بعد 5 أيام».",
    "Remove it after (optional)": "إزالته بعد (اختياري)",
    "After this time, students no longer see it, and it is deleted the next night. Without a time, it lasts the whole day.": "بعد هذا الوقت لا يراه الطلبة، ويُحذف في الليلة التالية. دون تحديد وقت، يبقى طوال ذلك اليوم.",
    "Event: {when}": "الموعد: {when}",
    "Countdown": "العد التنازلي",
    "hour": "ساعة",
    "hours": "ساعات",
    "day": "يوم",
    "days": "أيام",
    "Today": "اليوم",
    "Tomorrow": "غداً",
    "Today at {time}": "اليوم الساعة {time}",
    "Starting soon": "يبدأ قريباً",
    "In {n} days": "بعد {n} أيام",
    "Already happened": "انتهى موعده",
    "Up to 25 MB each. Word and PowerPoint files become PDFs by themselves a few minutes after uploading.": "حتى 25 ميغابايت لكل ملف. تتحول ملفات Word وPowerPoint إلى PDF تلقائياً بعد دقائق من رفعها.",
    "Word and PowerPoint files become PDFs by themselves a few minutes after uploading, so students can read them inside Opely.": "تتحول ملفات Word وPowerPoint إلى PDF تلقائياً بعد دقائق من رفعها، ليقرأها الطلبة داخل Opely.",
    "Archive": "الأرشيف",
    "Moved to the archive.": "نُقل إلى الأرشيف.",
    "Start a new version": "بدء نسخة جديدة",
    "For a new year or a new lecturer: the course’s lectures, labs and sources move to its archive, where students can still open them, and the course starts empty. The archive takes no space on the site.": "لعام جديد أو تدريسي جديد: تنتقل محاضرات المادة ومختبراتها ومصادرها إلى أرشيفها، حيث يبقى بإمكان الطلبة فتحها، وتبدأ المادة فارغة. الأرشيف لا يشغل أي مساحة من الموقع.",
    "Name of the current version": "اسم النسخة الحالية",
    "Archive the current version": "أرشفة النسخة الحالية",
    "Tap again to archive everything in this course": "اضغط مرة أخرى لأرشفة كل محتوى المادة",
    "This course has nothing to archive yet.": "لا يوجد في هذه المادة ما يُؤرشف بعد.",
    "The current version is in the archive.": "النسخة الحالية في الأرشيف الآن.",
    "Archived {date}": "أُرشفت في {date}",
    "Removed {date}": "حُذف في {date}",
    "Delete for good": "حذف نهائي",
    "Deleted for good.": "حُذف نهائياً.",
    "Restore": "استعادة",
    "Restored.": "استُعيد.",
    "Couldn’t restore it.": "تعذّرت الاستعادة.",
    "Restoring file {i} of {n}…": "جارٍ استعادة الملف {i} من {n}…",
    "Earlier versions and removed items. Students can open them too. They take no space on the site: GitHub keeps them in the site’s history.": "النسخ السابقة والعناصر المحذوفة. يستطيع الطلبة فتحها أيضاً. لا تشغل أي مساحة من الموقع، فـGitHub يحتفظ بها في سجل الموقع.",
    "Earlier versions": "النسخ السابقة",
    "Removed": "المحذوفة",
    "No earlier versions. Start one from the course’s Details.": "لا توجد نسخ سابقة. ابدأ واحدة من «التفاصيل».",
    "Nothing removed.": "لم يُحذف شيء.",
    "Earlier versions of this course, and lectures that were replaced or removed.": "النسخ السابقة من هذه المادة، والمحاضرات التي استُبدلت أو حُذفت.",
    "Nothing in the archive yet.": "لا يوجد شيء في الأرشيف بعد.",
    "Archived version": "نسخة مؤرشفة",
    "From the archive": "من الأرشيف",
    "Earlier files": "ملفات سابقة",
    "Labs": "المختبرات",
    "Tap Split to make one lab per file, Move to put a file in another card, or Lab and Source to switch a card.": "اضغط «فصل» لجعل كل ملف مختبراً، أو «نقل» لوضع ملف في بطاقة أخرى، أو «مختبر» و«مصدر» لتبديل البطاقة.",
    "Lab": "مختبر",
    "Lab {n}": "المختبر {n}",
    "Add lab": "إضافة مختبر",
    "New lab": "مختبر جديد",
    "Lab title": "عنوان المختبر",
    "A new lab": "مختبر جديد",
    "No labs yet.": "لا توجد مختبرات بعد.",
    "Lab deleted.": "حُذف المختبر.",
    "That lab is already gone. Reload the page.": "المختبر محذوف بالفعل. أعد تحميل الصفحة.",
    "Enter the lab title.": "اكتب عنوان المختبر.",
    "Every new lab needs a title.": "كل مختبر جديد يحتاج إلى عنوان.",
    "Every new lab needs a date.": "كل مختبر جديد يحتاج إلى تاريخ.",
    "This course has labs": "لهذه المادة مختبرات",
    "Adds a Labs part to the course, next to Lectures and Sources.": "يضيف قسم «المختبرات» إلى المادة، بجانب المحاضرات والمصادر.",
    "Delete the course’s labs first, then turn labs off.": "احذف مختبرات المادة أولاً، ثم أوقف المختبرات.",
    "Start with Lab {n}": "ابدأ بالمختبر {n}",
    "Continue with Lab {n}": "تابع بالمختبر {n}",
    "All labs opened": "فتحت كل المختبرات",
    "Import": "استيراد",
    "Import | Admin": "استيراد | الإدارة",
    "The zip reader didn’t load. Check your connection.": "لم يُحمَّل قارئ ملفات zip. تحقق من اتصالك.",
    "Larger than 25 MB": "أكبر من 25 ميغابايت",
    "Already on the site": "موجود في الموقع",
    "Cancel": "إلغاء",
    "Choose a file": "اختر ملفاً",
    "New announcement": "إعلان جديد",
    "Send it a minute after your change is on GitHub.": "أرسله بعد دقيقة من وصول تغييرك إلى GitHub.",
    "Up to 25 MB each.": "حتى 25 ميغابايت لكل ملف.",
    "Up to 25 MB, or a link below.": "حتى 25 ميغابايت، أو رابط في الأسفل.",
    "Students can still open what is archived, and you can restore it.": "يبقى بإمكان الطلبة فتح ما في الأرشيف، ويمكنك استعادته.",
    "Choose another stage": "اختر مرحلة أخرى",
    "Remove my stage": "إزالة مرحلتي",
    "Automatic opens the semester with the newest lecture.": "«تلقائي» يفتح الفصل الذي فيه أحدث محاضرة.",
    "Text, code and PDF pages": "النصوص والبرمجة وصفحات PDF",
    "Saved files and progress": "الملفات المحفوظة والتقدّم",
    "Remove from this browser": "إزالة من هذا المتصفح",
    "Download or save": "تنزيل أو حفظ",
    "Less": "أقل",
    "Watch the recording": "شاهد التسجيل",
    "Download the course to your files": "تنزيل المادة إلى ملفاتك",
    "Save the course in this browser": "حفظ المادة في هذا المتصفح",
    "Download to your files": "تنزيل إلى ملفاتك",
    "Save in this browser": "حفظ في هذا المتصفح",
    "Saved in this browser": "محفوظة في هذا المتصفح",
    "Coming up": "القادم",
    "Lectures by department": "المحاضرات حسب القسم",
    "Lectures by stage": "المحاضرات حسب المرحلة",
    "lecture": "محاضرة",
    "lectures": "محاضرات",
    "Statistics": "الإحصائيات",
    "{n} opened": "فُتح {n}",
    "Welcome to Opely": "أهلاً بك في Opely",
    "Pick your stage": "اختر مرحلتك",
    "It stays here, one tap away.": "تبقى هنا، على بُعد نقرة.",
    "Your department": "قسمك",
    "Your stage": "مرحلتك",
    "Add many lectures at once. Opely sorts your files into lectures, and you check everything before it’s uploaded.": "أضف محاضرات كثيرة مرة واحدة. يرتّب Opely ملفاتك في محاضرات، وتراجع كل شيء قبل رفعه.",
    "Files or zip files": "ملفات أو ملفات zip",
    "Zip files are opened for you, even zips inside zips.": "تُفتح ملفات zip تلقائياً، حتى الموجودة داخل ملفات zip أخرى.",
    "Sort into lectures": "رتّبها في محاضرات",
    "How Opely sorts them": "كيف يرتّبها Opely",
    "Choose some files or zip files first.": "اختر بعض الملفات أو ملفات zip أولاً.",
    "Opening the files…": "جارٍ فتح الملفات…",
    "No files were found inside.": "لم يُعثر على ملفات في الداخل.",
    "Course sources": "مصادر المادة",
    "Leave out": "استبعاد",
    "Left out": "مستبعدة",
    "Move": "نقل",
    "Change": "تغيير",
    "Adds to Lecture {n}": "تُضاف إلى المحاضرة {n}",
    "Check and upload": "راجع وارفع",
    "{n} added to lectures already on the site": "{n} تُضاف إلى محاضرات موجودة",
    "Nothing to upload yet.": "لا يوجد ما يُرفع بعد.",
    "Tap Move to put a file in another lecture, or Change to add a lecture to one that is already on the site. Lectures are ordered by date.": "اضغط «نقل» لوضع ملف في محاضرة أخرى، أو «تغيير» لإضافة محاضرة إلى أخرى موجودة. تُرتَّب المحاضرات حسب التاريخ.",
    "Upload {n} files": "رفع {n} ملفات",
    "A new lecture": "محاضرة جديدة",
    "Where should these files go?": "أين توضع هذه الملفات؟",
    "Every new lecture needs a title.": "كل محاضرة جديدة تحتاج إلى عنوان.",
    "Every new lecture needs a date.": "كل محاضرة جديدة تحتاج إلى تاريخ.",
    "A lecture was removed while you were importing. Reload the page.": "حُذفت محاضرة أثناء الاستيراد. أعد تحميل الصفحة.",
    "Uploaded {n} files.": "رُفع {n} ملفات.",
    "Departments": "الأقسام",
    "Choose your department.": "اختر قسمك.",
    "{n} more": "إعلانات أخرى: {n}",
    "All stages": "كل المراحل",
    "Choose your stage.": "اختر مرحلتك.",
    "No stages yet.": "لا توجد مراحل بعد.",
    "Updated {date}": "آخر تحديث {date}",
    "No lectures yet": "لا توجد محاضرات بعد",
    "No courses yet.": "لا توجد مواد بعد.",
    "Course content": "محتوى المادة",
    "Watch recording": "مشاهدة التسجيل",
    "No recording yet": "لا يوجد تسجيل بعد",
    "Previous": "السابق",
    "Next": "التالي",
    "Lecture {n}": "المحاضرة {n}",
    "Recording": "التسجيل",
    "Summary": "الملخص",
    "Files": "الملفات",
    "No files yet.": "لا توجد ملفات بعد.",
    "Downloading…": "جارٍ التنزيل…",
    "Download": "تنزيل",
    "Opening…": "جارٍ الفتح…",
    "saved in this browser": "محفوظ في هذا المتصفح",
    "Can’t show this file here. You can still download it.": "تعذّر عرض هذا الملف هنا. ما زال بإمكانك تنزيله.",
    "Can’t get this file. Check your connection, then reload.": "تعذّر جلب هذا الملف. تحقق من اتصالك ثم أعد تحميل الصفحة.",
    "Page {n}": "الصفحة {n}",
    "Can’t load the lectures. Check your connection, then reload.": "تعذّر تحميل المحاضرات. تحقق من اتصالك ثم أعد تحميل الصفحة.",
    "Loading…": "جارٍ التحميل…",
    "This department, stage, course, or lecture may have been renamed.": "ربما تغيّر اسم هذا القسم أو المرحلة أو المادة أو المحاضرة.",
    "See all departments": "عرض كل الأقسام",

    // ----- admin page: signing in -----
    "Opely Admin": "إدارة Opely",
    "Student site": "موقع الطلبة",
    "Manage your stage’s courses, lectures, sources, and announcements.": "أدِر مواد مرحلتك ومحاضراتها ومصادرها وإعلاناتها.",
    "Sign in": "تسجيل الدخول",
    "Paste the access token the site owner gave you. It is saved in this browser only. Never share it.": "الصق رمز الدخول الذي أعطاك إياه مالك الموقع. يُحفظ في هذا المتصفح فقط. لا تشاركه مع أحد.",
    "Access token": "رمز الدخول",
    "Set up the owner": "إعداد مالك الموقع",
    "No admins are registered yet. Register yourself as the owner. You can then add the other admins.": "لا يوجد مشرفون مسجّلون بعد. سجّل نفسك مالكاً للموقع، ثم أضف بقية المشرفين.",
    "Full name": "الاسم الكامل",
    "Your three-part name, in English. It is written next to every change you make.": "اسمك الثلاثي بالإنجليزية. يُكتب بجانب كل تغيير تجريه.",
    "Username": "اسم المستخدم",
    "Save and continue": "حفظ ومتابعة",
    "Connected as": "متصل باسم",
    "Sign out": "تسجيل الخروج",
    "Close": "إغلاق",
    "Signing in…": "جارٍ تسجيل الدخول…",
    "Paste your access token.": "الصق رمز الدخول.",
    "Enter your full three-part name, in English letters.": "اكتب اسمك الثلاثي الكامل بالأحرف الإنجليزية.",
    "Enter a username.": "اكتب اسم المستخدم.",
    "This token isn’t registered on the site. Ask the site owner to add you.": "هذا الرمز غير مسجّل في الموقع. اطلب من مالك الموقع إضافتك.",
    "Your department is no longer on the site. Ask the site owner.": "قسمك لم يعد موجوداً في الموقع. راجع مالك الموقع.",
    "Your stage is no longer on the site. Ask the site owner.": "مرحلتك لم تعد موجودة في الموقع. راجع مالك الموقع.",
    "Someone else was registered just now. Reload the page.": "سُجّل شخص آخر للتو. أعد تحميل الصفحة.",
    "Can’t load the list of departments. Check your connection, then reload.": "تعذّر تحميل قائمة الأقسام. تحقق من اتصالك ثم أعد تحميل الصفحة.",
    "Can’t load catalog.json. It belongs next to this page.": "تعذّر تحميل الملف catalog.json. مكانه بجانب هذه الصفحة.",
    "catalog.json has no departments yet.": "الملف catalog.json لا يحتوي أقساماً بعد.",
    "Signing in needs a secure address. Open the site with https, or at localhost.": "تسجيل الدخول يحتاج عنواناً آمناً. افتح الموقع عبر https أو من localhost.",
    "This copy of the site isn’t on GitHub Pages. Write the repository owner’s username in the OWNER line of admin.html.": "هذه النسخة من الموقع ليست على GitHub Pages. اكتب اسم مستخدم مالك المستودع في سطر OWNER داخل admin.html.",

    // ----- admin page: GitHub answers -----
    "GitHub rejected the token. Check it, or ask the site owner for a new one.": "رفض GitHub رمز الدخول. تحقق منه أو اطلب رمزاً جديداً من مالك الموقع.",
    "This token isn’t allowed to do that. It needs Contents set to “Read and write”.": "هذا الرمز لا يملك الصلاحية. يحتاج أن تكون صلاحية Contents هي “Read and write”.",
    "Can’t find the site’s repository with this token. Check that the token was made for this repository.": "تعذّر العثور على مستودع الموقع بهذا الرمز. تأكد أن الرمز أُنشئ لهذا المستودع.",
    "The content changed while saving. Try again.": "تغيّر المحتوى أثناء الحفظ. حاول مرة أخرى.",
    "GitHub refused the file:": "رفض GitHub الملف:",
    "Can’t reach GitHub. Check your connection and try again.": "تعذّر الوصول إلى GitHub. تحقق من اتصالك وحاول مرة أخرى.",
    "GitHub answered with error {n}.": "أجاب GitHub بالخطأ {n}.",
    "Couldn’t read {name}.": "تعذّرت قراءة {name}.",

    // ----- admin page: saving -----
    "Saving…": "جارٍ الحفظ…",
    "Saved.": "تم الحفظ.",
    "Students will see it in a minute or two.": "سيراه الطلبة خلال دقيقة أو دقيقتين.",
    "Saved, but {n} file(s) could not be removed from the repository.": "تم الحفظ، لكن تعذّر حذف {n} من الملفات من المستودع.",
    "Uploading file {i} of {n}…": "جارٍ رفع الملف {i} من {n}…",
    "Removing file {i} of {n}…": "جارٍ حذف الملف {i} من {n}…",
    "{name} is larger than 25 MB. Share it as a link instead.": "{name} أكبر من 25 ميغابايت. شاركه كرابط.",
    "Tap again to delete": "اضغط مرة أخرى للحذف",
    "Delete": "حذف",
    "That stage no longer exists. Reload the page.": "هذه المرحلة لم تعد موجودة. أعد تحميل الصفحة.",
    "That course no longer exists. Reload the page.": "هذه المادة لم تعد موجودة. أعد تحميل الصفحة.",

    // ----- admin page: stage and courses -----
    "No announcements yet": "لا توجد إعلانات بعد",
    "Post or remove": "نشر أو حذف",
    "Admins": "المشرفون",
    "Add or remove": "إضافة أو حذف",
    "Add course": "إضافة مادة",
    "New course": "مادة جديدة",
    "Course code": "رمز المادة",
    "Lecturer": "التدريسي",
    "Course title": "اسم المادة",
    "Enter the course’s code and title.": "اكتب رمز المادة واسمها.",
    "Course added.": "أُضيفت المادة.",
    "Link": "رابط",
    "File": "ملف",
    "Add source": "إضافة مصدر",
    "Save changes": "حفظ التغييرات",
    "Delete course": "حذف المادة",
    "Add lecture": "إضافة محاضرة",
    "Course": "المادة",
    "Details": "التفاصيل",
    "That lecture is already gone. Reload the page.": "هذه المحاضرة محذوفة مسبقاً. أعد تحميل الصفحة.",
    "Lecture deleted.": "حُذفت المحاضرة.",
    "That source is already gone. Reload the page.": "هذا المصدر محذوف مسبقاً. أعد تحميل الصفحة.",
    "Source deleted.": "حُذف المصدر.",
    "Course deleted.": "حُذفت المادة.",

    // ----- admin page: new lecture and new source -----
    "New lecture": "محاضرة جديدة",
    "Lecture title": "عنوان المحاضرة",
    "Date": "التاريخ",
    "Slides, notes, or PDFs. Up to 25 MB each.": "شرائح أو ملاحظات أو ملفات PDF. حتى 25 ميغابايت لكل ملف.",
    "Recording link (optional)": "رابط التسجيل (اختياري)",
    "Summary (optional)": "الملخص (اختياري)",
    "Upload": "رفع",
    "Enter the lecture title.": "اكتب عنوان المحاضرة.",
    "Choose the lecture date.": "اختر تاريخ المحاضرة.",
    "The link must start with https://": "يجب أن يبدأ الرابط بـ https://",
    "Uploaded.": "تم الرفع.",
    "New source": "مصدر جديد",
    "Source name": "اسم المصدر",
    "Course textbook": "الكتاب المنهجي",
    "Up to 25 MB. Or use a link instead.": "حتى 25 ميغابايت. أو استخدم رابطاً.",
    "Enter the source name.": "اكتب اسم المصدر.",
    "Add a file or a link for the source.": "أضف ملفاً أو رابطاً للمصدر.",

    // ----- admin page: announcements -----
    "Students of {stage} see these.": "يراها طلبة {stage}.",
    "Title": "العنوان",
    "Midterm exam dates": "مواعيد امتحانات نصف الفصل",
    "Message": "نص الإعلان",
    "Post announcement": "نشر الإعلان",
    "Posted": "المنشورة",
    "Enter the announcement’s title.": "اكتب عنوان الإعلان.",
    "Posted.": "تم النشر.",
    "That announcement is already gone. Reload the page.": "هذا الإعلان محذوف مسبقاً. أعد تحميل الصفحة.",
    "Announcement deleted.": "حُذف الإعلان.",

    // ----- admin page: admins -----
    "owner": "المالك",
    "Make a token on GitHub for each admin, register it here, then send it to them privately.": "أنشئ على GitHub رمزاً لكل مشرف، وسجّله هنا، ثم أرسله إليه بشكل خاص.",
    "Three-part name, in English.": "الاسم الثلاثي بالإنجليزية.",
    "Their access token": "رمز الدخول الخاص به",
    "Only its fingerprint is saved, never the token itself.": "تُحفظ بصمته فقط، لا الرمز نفسه.",
    "Add admin": "إضافة مشرف",
    "Registered": "المسجّلون",
    "Enter their full three-part name, in English letters.": "اكتب اسمه الثلاثي الكامل بالأحرف الإنجليزية.",
    "Enter their username.": "اكتب اسم المستخدم الخاص به.",
    "Paste their access token.": "الصق رمز الدخول الخاص به.",
    "That token is already registered.": "هذا الرمز مسجّل مسبقاً.",
    "Admin added.": "أُضيف المشرف.",
    "That admin is already gone. Reload the page.": "هذا المشرف محذوف مسبقاً. أعد تحميل الصفحة.",
    "Admin removed.": "حُذف المشرف.",
    "This page isn’t part of your admin area, or it was removed.": "هذه الصفحة ليست ضمن صلاحياتك، أو أنها حُذفت.",
    "Back to the start": "العودة إلى البداية",

    // ----- settings -----
    "Version {v}": "الإصدار {v}",
    "Version": "الإصدار",
    "Information": "معلومات",
    "License": "الرخصة",
    "PDF reader": "قارئ PDF",
    "Source code": "الشيفرة المصدرية",
    "Made by students, for students.": "من الطلبة، وإلى الطلبة.",
    "Opely keeps the lectures, slides, sources and announcements of every department and stage in one place. Everything you open is kept in your browser, so it opens quickly, even offline.": "يجمع Opely محاضرات كل قسم وكل مرحلة وشرائحها ومصادرها وإعلاناتها في مكان واحد. كل ما تفتحه يُحفظ في متصفحك، فيُفتح بسرعة حتى دون اتصال.",
    "{done} of {total} opened": "{done} من {total} مفتوحة",
    "Open": "افتح",
    "Opened": "مفتوحة",
    "Start with Lecture {n}": "ابدأ بالمحاضرة {n}",
    "Continue with Lecture {n}": "تابع بالمحاضرة {n}",
    "All lectures opened": "فتحت كل المحاضرات",
    "Progress": "التقدّم",
    "Lectures opened": "المحاضرات المفتوحة",
    "Reset progress": "إعادة ضبط التقدّم",
    "Tap again to reset": "اضغط مرة أخرى لإعادة الضبط",
    "Opely remembers which lectures you opened, in this browser only.": "يتذكر Opely المحاضرات التي فتحتها، في هذا المتصفح فقط.",
    "All departments": "كل الأقسام",
    "The stages you choose receive it in every department you choose.": "تصله المراحل التي تختارها في كل قسم تختاره.",
    "Posted to {n} departments.": "نُشر في {n} أقسام.",
    "Send to": "أرسل إلى",
    "Choose all stages, or one or more stages.": "اختر كل المراحل، أو مرحلة أو أكثر.",
    "From the owner": "من المالك",
    "Send to all stages or some": "أرسل إلى كل المراحل أو بعضها",
    "Owner": "المالك",
    "Stages": "المراحل",
    "As the owner, you manage every stage of every department.": "بصفتك المالك، تدير كل مراحل كل الأقسام.",
    "Nothing is saved.": "لا يُحفظ شيء.",
    "Welcome": "أهلاً بك",
    "Every lecture, in one place.": "كل المحاضرات، في مكان واحد.",
    "Pick your department to start. Opely remembers where you stopped.": "اختر قسمك لتبدأ. سيتذكر Opely أين توقفت.",
    "Continue": "تابع",
    "General": "عام",
    "More": "المزيد",
    "In this browser": "في هذا المتصفح",
    "None": "لا يوجد",
    "Settings": "الإعدادات",
    "Back": "رجوع",
    "Appearance": "المظهر",
    "Automatic": "تلقائي",
    "Light": "فاتح",
    "Dark": "داكن",
    "Language": "اللغة",
    "Automatic follows your device.": "الخيار التلقائي يتبع إعدادات جهازك.",
    "Saved files": "الملفات المحفوظة",
    "PDFs you open are kept in this browser, so they open faster next time.": "تُحفظ ملفات PDF التي تفتحها في هذا المتصفح لتفتح أسرع في المرة القادمة.",
    "No saved files.": "لا توجد ملفات محفوظة.",
    "Remove saved files": "حذف الملفات المحفوظة",
    "Tap again to remove": "اضغط مرة أخرى للحذف",
    "Saved files removed.": "حُذفت الملفات المحفوظة.",
    "Saving files isn’t available in this browser.": "حفظ الملفات غير متاح في هذا المتصفح.",
    "For people who manage a stage.": "لمن يدير إحدى المراحل.",
    "Admin page": "صفحة الإدارة",
    "About": "حول الموقع",
    "Opely is open source, under the MIT License.": "موقع Opely مفتوح المصدر، برخصة MIT.",
    "Light or dark": "فاتح أو داكن",
    "Previous lecture": "المحاضرة السابقة",
    "Previous lab": "المختبر السابق",
    "Previous file": "الملف السابق",
    "Next file": "الملف التالي",
    "Next lecture": "المحاضرة التالية",
    "Next lab": "المختبر التالي",
    "File {i} of {n}": "الملف {i} من {n}",
    "Download all": "تنزيل الكل",
    "Save offline": "حفظ دون اتصال",
    "Saved offline": "محفوظة",
    "Download all: one zip on your device. Save offline: kept in this browser, to open without internet.": "تنزيل الكل: ملف مضغوط واحد على جهازك. حفظ دون اتصال: تُحفظ في هذا المتصفح لتفتحها دون إنترنت.",
    "Save offline keeps the file in this browser, to open without internet.": "«حفظ دون اتصال» يحفظ الملف في هذا المتصفح لتفتحه دون إنترنت.",
    "Removed from this browser.": "حُذفت من هذا المتصفح.",
    "Saved in this browser. It opens even without internet.": "حُفظت في هذا المتصفح. تفتح حتى دون إنترنت.",
    "Order set by hand": "رُتّبت يدويًا",
    "Sort by date": "رتّب حسب التاريخ",
    "In date order. Drag the three lines to move a lecture.": "مرتّبة حسب التاريخ. اسحب الخطوط الثلاثة لنقل محاضرة.",
    "In date order. Drag the three lines to move a lab.": "مرتّبة حسب التاريخ. اسحب الخطوط الثلاثة لنقل مختبر.",
    "Lecture moved.": "نُقلت المحاضرة.",
    "Lab moved.": "نُقل المختبر.",
    "Sorted by date.": "رُتّبت حسب التاريخ.",
    "Delete lecture": "حذف المحاضرة",
    "Delete lab": "حذف المختبر",
    "Deleted lectures and labs go to the course’s archive, where you can restore them.": "تذهب المحاضرات والمختبرات المحذوفة إلى أرشيف المادة، ويمكنك استعادتها من هناك.",
    "Drag the three lines to change the order. It is saved at once.": "اسحب الخطوط الثلاثة لتغيير الترتيب. يُحفظ فورًا.",
    "Order saved.": "حُفظ الترتيب.",
    "Drag to move": "اسحب للنقل",
    "Drag the three lines next to a lecture to move it.": "اسحب الخطوط الثلاثة بجانب المحاضرة لنقلها.",
    "Not chosen yet": "لم تُختر بعد",
    "New lectures, labs and announcements, even when Opely is closed.": "المحاضرات والمختبرات والإعلانات الجديدة، حتى عندما يكون Opely مغلقًا.",
    "A line of a text file looks like this.": "هكذا يبدو سطر من ملف نصي.",
    "Actual size": "الحجم الفعلي",
    "Bigger": "أكبر",
    "Smaller": "أصغر",
    "Bold text": "نص عريض",
    "Code size": "حجم الشيفرة",
    "Couldn’t download everything. Check your connection, then try again.": "تعذّر تنزيل كل الملفات. تحقّق من اتصالك ثم حاول مجددًا.",
    "Download all ({n} files)": "تنزيل الكل ({n} ملفات)",
    "Downloaded.": "نُزّلت.",
    "Fit width": "ملء العرض",
    "Getting file {i} of {n}…": "جارٍ جلب الملف {i} من {n}…",
    "Kept in this browser only: files you opened open faster, and offline.": "تُحفظ في هذا المتصفح فقط: الملفات التي فتحتها تفتح أسرع، وبدون إنترنت.",
    "Line numbers": "أرقام الأسطر",
    "Long lines of code continue on the next line.": "تكمل أسطر الشيفرة الطويلة في السطر التالي.",
    "Making the zip…": "جارٍ إنشاء الملف المضغوط…",
    "Normal": "عادي",
    "Opely opens on": "يفتح Opely على",
    "Open in your device’s viewer": "افتح في عارض جهازك",
    "Open your stage and tap “Make this my stage” to open Opely there.": "افتح مرحلتك واضغط «اجعلها مرحلتي» ليفتح Opely عليها.",
    "PDF pages": "صفحات PDF",
    "Reading": "القراءة",
    "Start": "البداية",
    "Storage": "التخزين",
    "Text size": "حجم النص",
    "The buttons above every text and code file change these too.": "أزرار أعلى كل ملف نصي أو شيفرة تغيّر هذه أيضًا.",
    "Theme": "الوضع",
    "1. Make the keys": "١. اصنع المفاتيح",
    "2. Make the helper on Cloudflare": "٢. أنشئ المساعد على Cloudflare",
    "3. Give GitHub the keys": "٣. أعطِ GitHub المفاتيح",
    "4. Turn them on": "٤. شغّلها",
    "A new version of Opely is ready": "نسخة جديدة من Opely جاهزة",
    "After you change Opely’s code, send the update. Every student’s Opely then offers to update, or updates by itself at once.": "بعد تغيير شيفرة Opely، أرسل التحديث. سيعرض Opely عند كل طالب التحديث، أو يتحدّث بنفسه فورًا.",
    "Archive the lectures": "أرشفة المحاضرات",
    "Archive this course": "أرشفة هذه المادة",
    "Archived courses": "المواد المؤرشفة",
    "Archived course{sep}archived {date}. It stays here to read.": "مادة مؤرشفة{sep}أُرشفت في {date}. تبقى هنا للقراءة.",
    "Check and turn on": "تحقّق وشغّل",
    "Check for updates": "البحث عن تحديثات",
    "Checking the helper…": "جارٍ التحقق من المساعد…",
    "Choose at least one stage first.": "اختر مرحلة واحدة على الأقل أولًا.",
    "Compute → Workers & Pages → Create → Start with Hello World. Name it opely-notify, then Deploy.": "Compute ← Workers & Pages ← Create ← Start with Hello World. سمّه opely-notify، ثم اضغط Deploy.",
    "Copy the helper’s code": "انسخ شيفرة المساعد",
    "Copy the worker’s address (it ends in workers.dev) for step 3 and 4.": "انسخ عنوان الـ Worker (ينتهي بـ workers.dev) للخطوتين ٣ و٤.",
    "Couldn’t load it. It is the file cloudflare/worker.js in the repository.": "تعذّر تحميلها. إنها الملف cloudflare/worker.js في المستودع.",
    "Couldn’t reach Opely’s notifications. Try again later.": "تعذّر الوصول إلى إشعارات Opely. حاول لاحقًا.",
    "Courses that are no longer taught. Students can still open them, read only. They take no space on the site: GitHub keeps them in the site’s history.": "مواد لم تعد تُدرَّس. يستطيع الطلاب فتحها للقراءة فقط. لا تشغل مساحة في الموقع: يحفظها GitHub في سجلّ الموقع.",
    "Courses that are no longer taught. They stay here to read.": "مواد لم تعد تُدرَّس. تبقى هنا للقراءة.",
    "Edit code: delete everything, paste the helper’s code (the button below), then Deploy.": "Edit code: احذف كل شيء، والصق شيفرة المساعد (الزر بالأسفل)، ثم Deploy.",
    "Everyone at once": "للجميع فورًا",
    "Everything below is only needed to set them up again.": "ما يلي مطلوب فقط لإعدادها من جديد.",
    "For every student": "لكل الطلاب",
    "For example: a faster reader": "مثلًا: قارئ أسرع",
    "For students": "للطلاب",
    "Get a notification when a new lecture, lab or announcement is added to the stages you follow, even when Opely is closed.": "يصلك إشعار عند إضافة محاضرة أو مختبر أو إعلان جديد إلى المراحل التي تتابعها، حتى عندما يكون Opely مغلقًا.",
    "Home": "الرئيسية",
    "In the repository: Settings → Secrets and variables → Actions → New repository secret. Add these three:": "في المستودع: Settings ← Secrets and variables ← Actions ← New repository secret. أضف هذه الثلاثة:",
    "Last update sent": "آخر تحديث أُرسل",
    "Later": "لاحقًا",
    "Make a free account at dash.cloudflare.com and sign in.": "أنشئ حسابًا مجانيًا في dash.cloudflare.com وسجّل الدخول.",
    "Make everyone update now": "حدّث للجميع الآن",
    "Make new keys": "اصنع مفاتيح جديدة",
    "Make the keys": "اصنع المفاتيح",
    "Make the keys first (step 1).": "اصنع المفاتيح أولًا (الخطوة ١).",
    "Making new keys turns notifications off for everyone who has them on, until they turn them on again.": "صنع مفاتيح جديدة يوقف الإشعارات عند كل من شغّلها، حتى يشغّلوها من جديد.",
    "No archived courses.": "لا توجد مواد مؤرشفة.",
    "None yet": "لا شيء بعد",
    "Notifications": "الإشعارات",
    "Notifications are blocked. Allow them for Opely in the browser’s settings.": "الإشعارات محظورة. اسمح بها لـ Opely من إعدادات المتصفح.",
    "Notifications are off.": "الإشعارات متوقفة.",
    "Notifications are on": "الإشعارات مفعّلة",
    "Notifications are on.": "الإشعارات مفعّلة.",
    "Notifications aren’t set up yet. The site’s owner turns them on from the admin page.": "لم تُعدّ الإشعارات بعد. يشغّلها مالك الموقع من صفحة الإدارة.",
    "Off": "متوقفة",
    "On": "مفعّلة",
    "On iPhone and iPad, notifications work once Opely is on your Home Screen. Tap the Share button, then “Add to Home Screen”, and open Opely from there.": "على iPhone وiPad تعمل الإشعارات بعد إضافة Opely إلى الشاشة الرئيسية. اضغط زر المشاركة، ثم «إضافة إلى الشاشة الرئيسية»، وافتح Opely من هناك.",
    "Opely updates by itself on every phone and computer, without asking. Use it for an important fix.": "يتحدّث Opely بنفسه على كل هاتف وحاسوب دون سؤال. استخدمه لإصلاح مهم.",
    "Open GitHub’s secrets": "افتح أسرار GitHub",
    "Send it after your change is on the site (a minute or two after saving it on GitHub).": "أرسله بعد أن يظهر تغييرك في الموقع (بعد دقيقة أو دقيقتين من حفظه على GitHub).",
    "Send the update": "أرسل التحديث",
    "Sent. Students get it in the next minutes.": "أُرسل. سيصل إلى الطلاب خلال الدقائق القادمة.",
    "Set up": "إعداد",
    "Settings → Variables and Secrets → Add: type Secret, the name SECRET, the value the Secret from step 1.": "Settings ← Variables and Secrets ← Add: النوع Secret، والاسم SECRET، والقيمة هي السر من الخطوة ١.",
    "Stages you follow": "المراحل التي تتابعها",
    "Storage & Databases → D1 → Create database. Name it opely.": "Storage & Databases ← D1 ← Create database. سمّها opely.",
    "Students get a notification when a new lecture, lab or announcement is added to the stages they follow. It is set up once, for free, in about 15 minutes.": "يصل الطلابَ إشعارٌ عند إضافة محاضرة أو مختبر أو إعلان جديد إلى المراحل التي يتابعونها. تُعدّ مرة واحدة، مجانًا، في نحو ١٥ دقيقة.",
    "Tap again to archive the whole course": "اضغط مرة أخرى لأرشفة المادة كلها",
    "Tap again to make new keys": "اضغط مرة أخرى لصنع مفاتيح جديدة",
    "Tap again to send": "اضغط مرة أخرى للإرسال",
    "That course is no longer in the archive. Reload the page.": "لم تعد هذه المادة في الأرشيف. أعد تحميل الصفحة.",
    "The worker’s Bindings → Add binding → D1 database: the name DB, the database opely.": "في الـ Worker: Bindings ← Add binding ← D1 database: الاسم DB، وقاعدة البيانات opely.",
    "The worker’s address": "عنوان الـ Worker",
    "They are made in this browser. Keep this page open until step 4.": "تُصنع في هذا المتصفح. أبقِ هذه الصفحة مفتوحة حتى الخطوة ٤.",
    "This browser can’t show notifications.": "هذا المتصفح لا يدعم الإشعارات.",
    "Update": "تحديث",
    "Update Opely": "تحديث Opely",
    "Update {n}": "التحديث {n}",
    "Updates": "التحديثات",
    "Updates for students": "تحديثات للطلاب",
    "Updating Opely…": "جارٍ تحديث Opely…",
    "What changed (optional)": "ما الذي تغيّر (اختياري)",
    "When the course is no longer taught: the whole course leaves the stage and goes to the stage’s archived courses. Students can still open it, read only. You can bring it back at any time. It takes no space on the site.": "عندما لا تعود المادة تُدرَّس: تخرج المادة كلها من المرحلة وتذهب إلى المواد المؤرشفة. يستطيع الطلاب فتحها للقراءة فقط، ويمكنك إعادتها في أي وقت. لا تشغل مساحة في الموقع.",
    "You’ll get a notification when something new is added.": "سيصلك إشعار عند إضافة شيء جديد.",
    "the Private key": "المفتاح الخاص",
    "the Secret": "السر",
    "the worker’s address": "عنوان الـ Worker",
    "Secret": "السر",
    "Private key": "المفتاح الخاص",
    "For Cloudflare (step 2) and GitHub (step 3).": "لـ Cloudflare (الخطوة ٢) وGitHub (الخطوة ٣).",
    "For GitHub only (step 3). Never share it or put it on the site.": "لـ GitHub فقط (الخطوة ٣). لا تشاركه أبدًا ولا تضعه في الموقع.",
    "The helper didn’t answer. Check its address, and that it was deployed.": "لم يردّ المساعد. تحقّق من عنوانه ومن أنه نُشر (Deploy).",
    "Opely is up to date.": "Opely محدَّث.",
    "Couldn’t check. Are you online?": "تعذّر التحقق. هل أنت متصل بالإنترنت؟",
    "The course is in the archived courses.": "المادة الآن في المواد المؤرشفة."
  }
};

// Words used when counting things, for languages where "5 lectures" needs
// grammar that changes with the number. They are shown as "Lectures: 5".
const COUNT_WORDS = {
  ar: { course: "المواد", lecture: "المحاضرات", source: "المصادر", file: "الملفات", page: "الصفحات", announcement: "الإعلانات", admin: "المشرفون", stage: "المراحل", department: "الأقسام", "new lecture": "محاضرات جديدة", line: "الأسطر", lab: "المختبرات", "new lab": "مختبرات جديدة", "earlier version": "النسخ السابقة", "removed item": "العناصر المحذوفة" }
};

const RIGHT_TO_LEFT = ["ar"];

// ---------- The visitor's own choices (from the Settings page) ----------
// Saved in this browser only. "auto" means: follow the device.
const LANGUAGE_KEY = "opely-language";   // "auto", "en", or "ar"
const APPEARANCE_KEY = "opely-theme";    // "auto", "light", or "dark"

function savedChoice(key) {
  try { return localStorage.getItem(key) || "auto"; } catch (error) { return "auto"; }
}
function saveChoice(key, value) {
  try {
    if (value === "auto") localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch (error) { /* storage blocked: the choice lasts until the page is closed */ }
}

// Light or Dark Mode. The colours for each are in style.css.
function applyAppearance() {
  const choice = savedChoice(APPEARANCE_KEY);
  if (choice === "auto") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = choice;
  // The colour of the phone's status bar follows the same choice
  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
    if (!meta.dataset.auto) meta.dataset.auto = meta.content; // remember the device-following colour
    meta.content = choice === "auto" ? meta.dataset.auto : choice === "dark" ? "#000000" : "#F2F2F7";
  });
}
applyAppearance();

// The light/dark button in the top bar: one tap switches to the other, everywhere, at once.
// ("Automatic", which follows the device, is chosen in Settings.)
function isDarkNow() {
  const theme = document.documentElement.dataset.theme;
  return theme ? theme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
document.addEventListener("click", event => {
  const button = event.target.closest && event.target.closest("[data-theme-toggle]");
  if (!button) return;
  const change = () => {
    saveChoice(APPEARANCE_KEY, isDarkNow() ? "light" : "dark");
    applyAppearance();
    document.dispatchEvent(new Event("opely-appearance")); // Settings, if it is open, shows the new choice
  };
  // A soft cross-fade from light to dark, where the browser can do it
  if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.dataset.motion = "theme";
    document.startViewTransition(change).finished.finally(() => { delete document.documentElement.dataset.motion; });
  } else change();
});

// Settings → Bold text: every letter a little heavier (see "bold-text" in style.css)
const BOLD_KEY = "opely-bold";
function applyBold() {
  let on = false;
  try { on = localStorage.getItem(BOLD_KEY) === "on"; } catch (error) { /* storage blocked */ }
  document.documentElement.classList.toggle("bold-text", on);
}
applyBold();

// ---------- Choosing the language ----------
// A language chosen in Settings wins. Otherwise the device lists its
// languages in order of preference, for example ["ar-IQ", "en-US"],
// and the first one we have (or English) is used.
let lang = "en";       // the two-letter code of the language being shown
let locale = "en-US";  // the full code, used for writing dates
const chosenLanguage = savedChoice(LANGUAGE_KEY);
const deviceLanguages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
(chosenLanguage !== "auto" ? [chosenLanguage === "ar" ? "ar-IQ" : "en-US"] : deviceLanguages).some(tag => {
  const code = tag.toLowerCase().split("-")[0];
  if (code !== "en" && !TRANSLATIONS[code]) return false;
  lang = code;
  locale = tag;
  return true;
});
// Arabic dates use the local month names with the digits 0-9, to match course codes
if (lang === "ar") locale += "-u-nu-latn";

document.documentElement.lang = lang;
document.documentElement.dir = RIGHT_TO_LEFT.includes(lang) ? "rtl" : "ltr";

// ---------- Translating ----------
// Puts values into the {places} of a text: fill("Page {n}", { n: 3 }) gives "Page 3"
function fill(text, values) {
  return text.replace(/\{(\w+)\}/g, (whole, name) => (values && name in values ? values[name] : whole));
}

// Gives a text in the visitor's language. Text without a translation stays in English.
function t(text, values) {
  const words = TRANSLATIONS[lang];
  if (!words) return fill(text, values);
  // A translation for the finished sentence wins: "Stage 1" has its own, nicer wording
  return words[fill(text, values)] || fill(words[text] || text, values);
}

// "5 lectures" in English, "المحاضرات: 5" in Arabic
function plural(n, word) {
  const words = COUNT_WORDS[lang];
  if (words && words[word]) return words[word] + ": " + n;
  return n + " " + word + (n === 1 ? "" : "s");
}

// A date such as "Sep 7, 2026", written the way the visitor's language writes it
function niceDate(date) {
  return new Date(date + "T00:00").toLocaleDateString(locale, { month: "short", day: "numeric", year: "numeric" });
}

// The name of a department, faculty, or university. catalog.json can hold
// translated names:  "names": { "ar": "علوم الحاسوب" }
function localName(item) {
  return (item.names && item.names[lang]) || item.name;
}

// The name of a stage. The usual names ("Stage 1") are translated. A name an
// owner made up themselves is shown as it is.
function stageName(stage) {
  const usual = /^Stage (\d+)$/.exec(stage.name);
  return usual ? t("Stage {n}", { n: usual[1] }) : stage.name;
}

// The comma between two short pieces of text, as the visitor's language writes it
const SEP = t(", ");

// A page title such as "Announcements | Admin", with the parts we can translate translated
function localTitle(title) {
  return title.split(" | ").map(part => t(part)).join(" | ");
}

// Translates the text that is written directly in a page's HTML
// (headings, labels, buttons, placeholders). Called once when a page opens.
function translatePage() {
  document.title = localTitle(document.title);
  if (!TRANSLATIONS[lang]) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const texts = [];
  while (walker.nextNode()) texts.push(walker.currentNode);
  texts.forEach(node => {
    const english = node.textContent.trim();
    if (english && TRANSLATIONS[lang][english] && !node.parentElement.closest("script, style")) {
      node.textContent = node.textContent.replace(english, TRANSLATIONS[lang][english]);
    }
  });
  document.querySelectorAll("[placeholder]").forEach(field => {
    if (TRANSLATIONS[lang][field.placeholder]) field.placeholder = TRANSLATIONS[lang][field.placeholder];
  });
}
