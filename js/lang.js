/**
 * Système de traduction FR / AR — Mihyarou Souna
 * Fonctionne sur toutes les pages via data-i18n="clé"
 * RTL automatique en arabe
 */
(function () {

  /* ─── Dictionnaire ─────────────────────────────── */
  var T = {

    /* ── Navigation ── */
    "nav.home":          { fr: "Accueil",              ar: "الرئيسية" },
    "nav.about":         { fr: "À propos",             ar: "من نحن" },
    "nav.schools":       { fr: "Nos écoles",           ar: "مدارسنا" },
    "nav.programs":      { fr: "Programmes",           ar: "البرامج" },
    "nav.admissions":    { fr: "Admissions & Modalités", ar: "التسجيل والشروط" },
    "nav.contact":       { fr: "Contact",              ar: "اتصل بنا" },
    "nav.portal":        { fr: "Parents / Professeurs", ar: "الأولياء / الأساتذة" },

    /* ── Footer ── */
    "footer.slogan":     { fr: "Discipline • Travail • Réussite", ar: "الانضباط • العمل • النجاح" },
    "footer.subscribe":  { fr: "S'abonner",            ar: "اشترك" },
    "footer.email":      { fr: "Votre email",          ar: "بريدك الإلكتروني" },
    "footer.copy":       { fr: "© 2026 Complexe Scolaire Privé Franco-Arabe Mihyarou Souna",
                           ar: "© 2026 المجمع المدرسي الخاص الفرنسي العربي ميهياروسونا" },
    "footer.contact.info": {
      fr: "📍 Parcelles Assainies & Keur Massar<br>☎ 33 878 27 42 • 77 157 90 06<br>✉ mihyaroufa@gmail.com",
      ar: "📍 بارسيل الصحية وكير مصار<br><span dir=\"ltr\" style=\"unicode-bidi:embed\">☎ 33 878 27 42 • 77 157 90 06</span><br><span dir=\"ltr\" style=\"unicode-bidi:embed\">✉ mihyaroufa@gmail.com</span>"
    },

    /* ── Index ── */
    "index.welcome":     { fr: "BIENVENUE AU",         ar: "مرحباً بكم في" },
    "index.h1":          { fr: "Complexe Scolaire Privé<br><span>Franco-Arabe</span> <strong>Mihyarou Souna</strong>",
                           ar: "المجمع المدرسي الخاص<br><span>الفرنسي العربي</span> <strong>ميهياروسونا</strong>" },
    "index.lead":        { fr: "Un réseau éducatif franco-arabe qui accompagne les enfants de la crèche au collège, avec un enseignement équilibré entre programme français, langue arabe, Coran et valeurs islamiques.",
                           ar: "شبكة تعليمية فرنسية عربية ترافق الأطفال من الحضانة إلى المتوسط، بمنهج متوازن بين البرنامج الفرنسي، اللغة العربية، القرآن الكريم والقيم الإسلامية." },
    "index.btn.schools": { fr: "Découvrir nos écoles", ar: "اكتشف مدارسنا" },
    "index.btn.adm":     { fr: "Admissions & Modalités", ar: "التسجيل والشروط" },
    "index.loc.title":   { fr: "Parcelles & Keur Massar", ar: "بارسيل وكير مصار" },
    "index.loc.sub":     { fr: "Deux écoles franco-arabes à Dakar", ar: "مدرستان فرنسيتان عربيتان بداكار" },
    "index.dara.title":  { fr: "Dara moderne",         ar: "دارة حديثة" },
    "index.dara.sub":    { fr: "Internat franco-arabe avec encadrement", ar: "داخلية فرنسية عربية مع إشراف تربوي" },
    "index.motto.title": { fr: "Discipline • Travail • Réussite", ar: "الانضباط • العمل • النجاح" },
    "index.motto.sub":   { fr: "Une devise au cœur du projet éducatif", ar: "شعار في قلب المشروع التربوي" },
    "index.pill1.title": { fr: "Nos écoles",           ar: "مدارسنا" },
    "index.pill1.text":  { fr: "Parcelles Assainies et Keur Massar, avec des niveaux adaptés aux familles.",
                           ar: "بارسيل الصحية وكير مصار، بمستويات تناسب جميع الأسر." },
    "index.pill2.title": { fr: "Programmes",           ar: "البرامج" },
    "index.pill2.text":  { fr: "Français, arabe, Coran, valeurs islamiques et activités complémentaires.",
                           ar: "الفرنسية، العربية، القرآن، القيم الإسلامية والأنشطة المكملة." },
    "index.pill3.title": { fr: "Admissions",           ar: "التسجيل" },
    "index.pill3.text":  { fr: "Dossiers, modalités et informations d'inscription 2026–2027.",
                           ar: "ملفات التسجيل، الشروط ومعلومات الالتحاق 2026–2027." },
    "index.mission.kicker": { fr: "NOTRE MISSION",     ar: "مهمتنا" },
    "index.mission.h2":  { fr: "Former les cœurs et les esprits", ar: "تكوين القلوب والعقول" },
    "index.mission.text":{ fr: "Mihyarou Souna propose une éducation complète qui unit réussite scolaire, maîtrise de l'arabe, apprentissage religieux et encadrement bienveillant.",
                           ar: "يقدم ميهياروسونا تعليماً شاملاً يجمع النجاح الدراسي وإتقان اللغة العربية والتعلم الديني والرعاية التربوية." },
    "index.contact.btn": { fr: "Nous contacter →",     ar: "تواصل معنا →" },
    "index.stat1":       { fr: "🏫 2 écoles",          ar: "🏫 مدرستان" },
    "index.stat1.sub":   { fr: "Parcelles Assainies et Keur Massar", ar: "بارسيل الصحية وكير مصار" },
    "index.stat2":       { fr: "🧒 Crèche à 3ème",    ar: "🧒 من الحضانة إلى الثالثة" },
    "index.stat2.sub":   { fr: "Selon le site choisi", ar: "حسب الموقع المختار" },
    "index.stat3":       { fr: "🛏️ Internat",         ar: "🛏️ داخلية" },
    "index.stat3.sub":   { fr: "Dara moderne franco-arabe", ar: "دارة حديثة فرنسية عربية" },
    "index.why.title":   { fr: "POURQUOI NOUS CHOISIR ?", ar: "لماذا تختارنا؟" },
    "index.why1.title":  { fr: "Double compétence",    ar: "كفاءة مزدوجة" },
    "index.why1.text":   { fr: "Français et arabe dans un même parcours.", ar: "الفرنسية والعربية في مسار واحد." },
    "index.why2.title":  { fr: "Encadrement rigoureux", ar: "إشراف صارم" },
    "index.why2.text":   { fr: "Discipline, suivi et accompagnement des élèves.", ar: "الانضباط والمتابعة ومرافقة التلاميذ." },
    "index.why3.title":  { fr: "Valeurs islamiques",   ar: "القيم الإسلامية" },
    "index.why3.text":   { fr: "Respect, responsabilité et éducation morale.", ar: "الاحترام والمسؤولية والتربية الأخلاقية." },

    /* ── À propos ── */
    "about.kicker":      { fr: "Présentation du complexe", ar: "تعريف بالمجمع" },
    "about.h1":          { fr: "Complexe Scolaire Privé Franco-Arabe Mihyarou Souna",
                           ar: "المجمع المدرسي الخاص الفرنسي العربي ميهياروسونا" },
    "about.intro":       { fr: "Fondé en 1995, Mihyarou Souna accompagne depuis plus de trente ans les jeunes générations à travers une éducation franco-arabe équilibrée, fondée sur l'excellence, la discipline, les valeurs islamiques et l'ouverture au savoir.",
                           ar: "تأسس عام 1995، ويرافق ميهياروسونا منذ أكثر من ثلاثين عاماً الأجيال الصاعدة عبر تعليم فرنسي عربي متوازن قائم على التميز والانضباط والقيم الإسلامية والانفتاح على المعرفة." },
    "about.founder":     { fr: "Imam Babacar KA",      ar: "الإمام بابكر كا" },
    "about.founder.sub": { fr: "Fondateur du complexe", ar: "مؤسس المجمع" },
    "about.stat1":       { fr: "Année de fondation",   ar: "سنة التأسيس" },
    "about.stat2":       { fr: "Ans d'expérience",     ar: "سنة من الخبرة" },
    "about.stat3":       { fr: "Élèves accompagnés",   ar: "تلميذاً مرافقاً" },
    "about.stat4":       { fr: "Établissements",       ar: "مؤسسة تعليمية" },
    "about.ref.title":   { fr: "Une référence dans l'éducation franco-arabe",
                           ar: "مرجع في التعليم الفرنسي العربي" },
    "about.ref.p1":      { fr: "Fondé en 1995 par l'Imam Babacar KA, le Complexe Scolaire Privé Franco-Arabe Mihyarou Souna est un établissement d'enseignement privé de référence qui œuvre depuis plus de trente ans dans la formation et l'éducation des jeunes générations.",
                           ar: "أسسه الإمام بابكر كا عام 1995، وهو مؤسسة تعليمية خاصة مرجعية تعمل منذ أكثر من ثلاثين عاماً في تكوين وتعليم الأجيال الناشئة." },
    "about.mission.title": { fr: "Notre mission",      ar: "مهمتنا" },
    "about.engage.title":  { fr: "Notre engagement",   ar: "التزامنا" },
    "about.vision.title":  { fr: "Notre vision",       ar: "رؤيتنا" },
    "about.values.title":  { fr: "Nos valeurs",        ar: "قيمنا" },
    "about.assets.title":  { fr: "Nos atouts",         ar: "مزاياتنا" },
    "about.sites.title":   { fr: "Nos implantations",  ar: "مواقعنا" },
    "about.cta":           { fr: "Découvrir les admissions", ar: "اكتشف التسجيل" },

    /* ── Écoles ── */
    "schools.h1":        { fr: "Nos Écoles",            ar: "مدارسنا" },
    "schools.sub":       { fr: "Deux établissements, un internat moderne et plus de 30 ans d'engagement au service de l'éducation franco-arabe.",
                           ar: "مؤسستان تعليميتان، داخلية حديثة وأكثر من 30 عاماً من الالتزام بالتعليم الفرنسي العربي." },
    "schools.why.title": { fr: "Pourquoi choisir Mihyarou Souna ?", ar: "لماذا تختار ميهياروسونا؟" },

    /* ── Programmes ── */
    "prog.h1":           { fr: "Nos Programmes Éducatifs", ar: "برامجنا التربوية" },
    "prog.sub":          { fr: "Une formation complète conforme au programme académique sénégalais et enrichie par l'enseignement de la langue arabe, du Saint Coran et de l'éducation islamique.",
                           ar: "تكوين شامل وفق البرنامج الأكاديمي السنغالي، معزّز بتعليم اللغة العربية والقرآن الكريم والتربية الإسلامية." },

    /* ── Admissions ── */
    "adm.h1":            { fr: "Admissions & Modalités", ar: "التسجيل والشروط" },
    "adm.sub":           { fr: "Une page compacte pour consulter les dossiers à fournir, les conditions d'inscription, les options et les frais de scolarité 2026–2027 des sites Parcelles Assainies, Keur Massar et de l'Internat Al Bayan.",
                           ar: "صفحة مدمجة للاطلاع على الملفات المطلوبة وشروط التسجيل والتكاليف الدراسية 2026–2027 لمواقع بارسيل الصحية وكير مصار وداخلية البيان." },
    "adm.docs.title":    { fr: "📁 Dossiers à fournir", ar: "📁 الملفات المطلوبة" },
    "adm.contact.btn":   { fr: "Contacter l'école",    ar: "تواصل مع المدرسة" },
    "adm.cta.text":      { fr: "Rassemblez les pièces demandées puis contactez l'administration pour confirmer la disponibilité des places et les modalités du site choisi.",
                           ar: "جمّع الوثائق المطلوبة ثم تواصل مع الإدارة للتأكد من توفر الأماكن وشروط الموقع المختار." },

    /* ── Contact ── */
    "contact.h1":        { fr: "Contact & Informations", ar: "التواصل والمعلومات" },
    "contact.sub":       { fr: "Entrer en contact avec Mihyarou Souna", ar: "تواصل مع ميهياروسونا" },
    "contact.desc":      { fr: "Notre administration est disponible pour vous accompagner dans les demandes d'inscription, les renseignements sur les niveaux, les modalités, le transport, la cantine et l'Internat Al Bayan.",
                           ar: "إدارتنا متاحة لمساعدتكم في طلبات التسجيل والمعلومات حول المستويات والشروط والنقل والمطعم وداخلية البيان." },
    "contact.hours":     { fr: "Lundi au vendredi",    ar: "الاثنين إلى الجمعة" },
    "contact.send.title":{ fr: "Envoyer une demande",  ar: "إرسال طلب" },
    "contact.send.btn":  { fr: "Envoyer la demande",   ar: "إرسال الطلب" },
    "contact.sites.title":{ fr: "Nos deux sites",      ar: "موقعانا" },
    "contact.badge":     { fr: "Contact & Informations", ar: "التواصل والمعلومات" },
    "contact.km.title":  { fr: "📍 Keur Massar",       ar: "📍 كير مصار" },
    "contact.km.addr":   { fr: "Aïnoumady / Quartier Ainoumady N°135", ar: "Aïnoumady / Quartier Ainoumady N°135" },
    "contact.km.city":   { fr: "Keur Massar — Dakar — Sénégal", ar: "Keur Massar — Dakar — Sénégal" },
    "contact.pa.title":  { fr: "📍 Parcelles Assainies", ar: "📍 بارسيل الصحية" },
    "contact.pa.addr":   { fr: "Unité 17 N°288",       ar: "Unité 17 N°288" },
    "contact.pa.city":   { fr: "Dakar — Sénégal",      ar: "Dakar — Sénégal" },
    "contact.hours.title":{ fr: "🕒 Horaires",          ar: "🕒 مواعيد العمل" },
    "contact.hours.time":{ fr: "08h00 — 18h00",        ar: "08:00 — 18:00" },
    "contact.coords.title":{ fr: "Coordonnées rapides", ar: "معلومات الاتصال" },
    "contact.phones.label":{ fr: "Téléphones",          ar: "الهواتف" },
    "contact.emails.label":{ fr: "Emails",              ar: "البريد الإلكتروني" },
    "contact.services.label":{ fr: "Services",          ar: "الخدمات" },
    "contact.services.text":{ fr: "Admissions, modalités, transport, cantine, internat et renseignements scolaires.",
                              ar: "التسجيل، الشروط، النقل، المطعم، الداخلية والمعلومات المدرسية." },
    "contact.call.btn":  { fr: "Appeler maintenant",   ar: "اتصل الآن" },
    "contact.email.btn": { fr: "Envoyer un email",     ar: "إرسال بريد إلكتروني" },
    "contact.adm.btn":   { fr: "Admissions & Modalités", ar: "التسجيل والشروط" },
    "contact.name.ph":   { fr: "Nom complet",          ar: "الاسم الكامل" },
    "contact.phone.ph":  { fr: "Téléphone / WhatsApp", ar: "الهاتف / واتساب" },
    "contact.email.ph":  { fr: "Email",                ar: "البريد الإلكتروني" },
    "contact.subject.ph":{ fr: "Objet de la demande",  ar: "موضوع الطلب" },
    "contact.opt.inscription":{ fr: "Inscription",     ar: "التسجيل" },
    "contact.opt.modalites":  { fr: "Modalités / frais", ar: "الشروط / الرسوم" },
    "contact.opt.transport":  { fr: "Transport",       ar: "النقل" },
    "contact.opt.internat":   { fr: "Internat Al Bayan", ar: "داخلية البيان" },
    "contact.opt.autre":      { fr: "Autre information", ar: "معلومة أخرى" },
    "contact.msg.ph":    { fr: "Votre message",        ar: "رسالتك" },
    "contact.map.addr":  { fr: "Parcelles Assainies U17 N°288 • Aïnoumady, Keur Massar",
                           ar: "Parcelles Assainies U17 N°288 • Aïnoumady, Keur Massar" },

    /* ── À propos — contenu détaillé ── */
    "about.stat2":       { fr: "Ans d'expérience",     ar: "سنة من الخبرة" },
    "about.ref.title":   { fr: "Une référence dans l'éducation franco-arabe", ar: "مرجع في التعليم الفرنسي العربي" },
    "about.ref.p1":      { fr: "Fondé en 1995 par l'Imam Babacar KA, le Complexe Scolaire Privé Franco-Arabe Mihyarou Souna est un établissement d'enseignement privé de référence qui œuvre depuis plus de trente ans dans la formation et l'éducation des jeunes générations.",
                           ar: "أسسه الإمام بابكر كا عام 1995، وهو مؤسسة تعليمية خاصة مرجعية تعمل منذ أكثر من ثلاثين عاماً في تكوين وتعليم الأجيال الناشئة." },
    "about.ref.p2":      { fr: "Animé par une vision fondée sur l'excellence, la discipline, les valeurs islamiques et l'ouverture au savoir, le complexe propose un enseignement de qualité conforme aux programmes officiels de l'État du Sénégal tout en accordant une place importante à l'enseignement de la langue arabe, du Saint Coran et de l'éducation religieuse.",
                           ar: "مدفوعاً برؤية قائمة على التميز والانضباط والقيم الإسلامية والانفتاح على المعرفة، يقدم المجمع تعليماً عالي الجودة وفق البرامج الرسمية للدولة السنغالية مع إيلاء مكانة بارزة لتعليم اللغة العربية والقرآن الكريم والتربية الدينية." },
    "about.ref.p3":      { fr: "Le complexe est composé de deux établissements scolaires et d'un internat moderne, offrant ainsi un cadre d'apprentissage complet et sécurisé aux élèves venant de différentes localités du Sénégal.",
                           ar: "يتكون المجمع من مؤسستين تعليميتين وداخلية حديثة، مما يوفر إطاراً تعليمياً شاملاً وآمناً للتلاميذ القادمين من مختلف مناطق السنغال." },
    "about.mission.p":   { fr: "Notre mission est de former des citoyens responsables, compétents et enracinés dans les valeurs morales et spirituelles, à travers :",
                           ar: "مهمتنا هي تكوين مواطنين مسؤولين وأكفاء ومتجذرين في القيم الأخلاقية والروحية، من خلال:" },
    "about.mission.li1": { fr: "Un enseignement préscolaire favorisant l'éveil et le développement harmonieux de l'enfant ;",
                           ar: "تعليم ما قبل المدرسة يعزز الوعي والنمو المتناسق للطفل ؛" },
    "about.mission.li2": { fr: "Un enseignement élémentaire solide permettant l'acquisition des savoirs fondamentaux ;",
                           ar: "تعليم ابتدائي متين يتيح اكتساب المعارف الأساسية ؛" },
    "about.mission.li3": { fr: "Un enseignement moyen et secondaire préparant efficacement aux examens nationaux et aux études supérieures ;",
                           ar: "تعليم متوسط وثانوي يُعدّ فعلياً للامتحانات الوطنية والدراسات العليا ؛" },
    "about.mission.li4": { fr: "Une formation franco-arabe équilibrée conciliant les exigences du système éducatif moderne et les valeurs de l'éducation islamique.",
                           ar: "تكوين فرنسي عربي متوازن يوفّق بين متطلبات النظام التعليمي الحديث وقيم التربية الإسلامية." },
    "about.engage.p":    { fr: "Depuis sa création, le Complexe Scolaire Privé Franco-Arabe Mihyarou Souna s'engage à offrir une éducation de qualité alliant savoir, savoir-faire et savoir-être, afin de préparer des générations capables de relever les défis du monde moderne tout en préservant leur identité culturelle et religieuse.",
                           ar: "منذ تأسيسه، يلتزم مجمع ميهياروسونا بتقديم تعليم نوعي يجمع المعرفة والمهارة وحسن التصرف، إعداداً لأجيال قادرة على مواجهة تحديات العالم الحديث مع الحفاظ على هويتها الثقافية والدينية." },
    "about.vision.p":    { fr: "Le Complexe Mihyarou Souna ambitionne de devenir un pôle d'excellence éducative reconnu pour la qualité de son enseignement, son encadrement rigoureux et sa contribution à la formation d'une jeunesse consciente de ses responsabilités sociales, civiques et religieuses.",
                           ar: "يطمح مجمع ميهياروسونا أن يصبح قطباً للتميز التعليمي معترفاً به بجودة تعليمه وإشرافه الصارم ومساهمته في تكوين شباب واعٍ بمسؤولياته الاجتماعية والمدنية والدينية." },
    "about.val.discipline":{ fr: "Discipline",          ar: "الانضباط" },
    "about.val.travail": { fr: "Travail",               ar: "العمل" },
    "about.val.reussite":{ fr: "Réussite",              ar: "النجاح" },
    "about.val.respect": { fr: "Respect",               ar: "الاحترام" },
    "about.val.excellence":{ fr: "Excellence",          ar: "التميز" },
    "about.assets.li1":  { fr: "Plus de 30 ans d'expérience dans le domaine de l'éducation ;",
                           ar: "أكثر من 30 عاماً من الخبرة في مجال التعليم ؛" },
    "about.assets.li2":  { fr: "Un corps enseignant qualifié et expérimenté ;",
                           ar: "هيئة تدريسية مؤهلة وذات خبرة ؛" },
    "about.assets.li3":  { fr: "Un enseignement bilingue franco-arabe adapté aux exigences actuelles ;",
                           ar: "تعليم ثنائي اللغة فرنسي عربي متكيف مع المتطلبات الراهنة ؛" },
    "about.assets.li4":  { fr: "Un encadrement pédagogique et moral de qualité ;",
                           ar: "إشراف تربوي وأخلاقي عالي الجودة ؛" },
    "about.assets.li5":  { fr: "Un internat moderne offrant des conditions optimales d'hébergement, d'étude et de sécurité ;",
                           ar: "داخلية حديثة توفر ظروفاً مثلى للإقامة والدراسة والأمن ؛" },
    "about.assets.li6":  { fr: "Un environnement propice à l'épanouissement intellectuel, spirituel et social des apprenants ;",
                           ar: "بيئة مواتية للتفتح الفكري والروحي والاجتماعي للمتعلمين ؛" },
    "about.assets.li7":  { fr: "Des activités éducatives, culturelles et religieuses contribuant au développement intégral de l'élève.",
                           ar: "أنشطة تعليمية وثقافية ودينية تسهم في التنمية الشاملة للتلميذ." },
    "about.site.km.title":{ fr: "Site de Keur Massar",  ar: "موقع كير مصار" },
    "about.site.km.addr":{ fr: "Quartier Ainoumady N°135, Keur Massar", ar: "Quartier Ainoumady N°135, Keur Massar" },
    "about.site.km.desc":{ fr: "Internat Al Bayan intégré au complexe pour l'accueil et l'encadrement des pensionnaires.",
                           ar: "داخلية البيان مدمجة في المجمع لاستقبال الطلاب الداخليين ورعايتهم." },
    "about.site.pa.title":{ fr: "Site des Parcelles Assainies", ar: "موقع بارسيل الصحية" },
    "about.site.pa.addr":{ fr: "Unité 17, N°288",       ar: "Unité 17, N°288" },
    "about.site.pa.desc":{ fr: "Un cadre d'enseignement moderne et accessible aux populations de Dakar et sa banlieue.",
                           ar: "إطار تعليمي حديث وميسور الوصول لسكان داكار وضواحيها." },
    "about.cta.title":   { fr: "Discipline • Travail • Réussite", ar: "الانضباط • العمل • النجاح" },
    "about.cta.sub":     { fr: "Un cadre éducatif complet pour former des élèves compétents, responsables et attachés à leurs valeurs.",
                           ar: "إطار تعليمي متكامل لتكوين تلاميذ أكفاء ومسؤولين ومتمسكين بقيمهم." },

    /* ── Écoles — contenu détaillé ── */
    "schools.stat1":     { fr: "Ans d'expérience",     ar: "سنة من الخبرة" },
    "schools.stat2":     { fr: "Élèves",               ar: "تلميذ" },
    "schools.stat3":     { fr: "Établissements",       ar: "مؤسسة تعليمية" },
    "schools.stat4":     { fr: "Internat moderne",     ar: "داخلية حديثة" },
    "schools.pa.title":  { fr: "🏫 École des Parcelles Assainies", ar: "🏫 مدرسة بارسيل الصحية" },
    "schools.pa.addr":   { fr: "Adresse :", ar: "العنوان :" },
    "schools.pa.desc":   { fr: "L'établissement des Parcelles Assainies accueille les élèves du cycle élémentaire du CI au CM2 dans un environnement moderne favorisant la réussite scolaire, l'épanouissement personnel et l'apprentissage des valeurs.",
                           ar: "تستقبل مدرسة بارسيل الصحية تلاميذ المرحلة الابتدائية من CI إلى CM2 في بيئة حديثة تعزز النجاح الدراسي والتفتح الشخصي وتعلم القيم." },
    "schools.pa.f1":     { fr: "CI à CM2",             ar: "من CI إلى CM2" },
    "schools.pa.f2":     { fr: "Enseignement franco-arabe", ar: "تعليم فرنسي عربي" },
    "schools.pa.f3":     { fr: "Éducation islamique",  ar: "التربية الإسلامية" },
    "schools.pa.f4":     { fr: "Apprentissage du Coran", ar: "تعلم القرآن الكريم" },
    "schools.pa.f5":     { fr: "Suivi pédagogique",    ar: "المتابعة التربوية" },
    "schools.pa.f6":     { fr: "Activités éducatives", ar: "الأنشطة التعليمية" },
    "schools.km.title":  { fr: "🏫 École de Keur Massar", ar: "🏫 مدرسة كير مصار" },
    "schools.km.desc":   { fr: "Le site de Keur Massar constitue le principal pôle éducatif du complexe et accueille les apprenants de la crèche à la classe de Troisième BFEM.",
                           ar: "يمثل موقع كير مصار القطب التعليمي الرئيسي للمجمع ويستقبل المتعلمين من الحضانة حتى الصف الثالث BFEM." },
    "schools.km.sections":{ fr: "Sections disponibles", ar: "الأقسام المتاحة" },
    "schools.km.s1":     { fr: "Garderie et Crèche",   ar: "الحضانة والروضة" },
    "schools.km.s2":     { fr: "Préscolaire",           ar: "ما قبل المدرسة" },
    "schools.km.s3":     { fr: "Élémentaire : CI à CM2", ar: "الابتدائي : من CI إلى CM2" },
    "schools.km.s4":     { fr: "Moyen : 6e à 3e",      ar: "المتوسط : من 6ème إلى 3ème" },
    "schools.km.s5":     { fr: "Préparation BFEM",      ar: "الإعداد لشهادة BFEM" },
    "schools.km.s6":     { fr: "Encadrement religieux", ar: "الإرشاد الديني" },
    "schools.km.services":{ fr: "Services proposés",    ar: "الخدمات المقدمة" },
    "schools.km.sv1":    { fr: "Transport scolaire",    ar: "النقل المدرسي" },
    "schools.km.sv2":    { fr: "Cantine",               ar: "المطعم المدرسي" },
    "schools.km.sv3":    { fr: "Informatique",          ar: "الإعلام الآلي" },
    "schools.km.sv4":    { fr: "Karaté",                ar: "الكاراتيه" },
    "schools.km.sv5":    { fr: "Suivi personnalisé",    ar: "المتابعة الفردية" },
    "schools.km.sv6":    { fr: "Activités éducatives",  ar: "الأنشطة التعليمية" },
    "schools.int.title": { fr: "🏠 Internat Al Bayan",  ar: "🏠 داخلية البيان" },
    "schools.int.desc":  { fr: "L'Internat Al Bayan accueille les élèves venant de différentes localités du Sénégal dans un cadre sécurisé, organisé et propice à l'étude, à la discipline et à l'épanouissement personnel.",
                           ar: "تستقبل داخلية البيان التلاميذ القادمين من مختلف مناطق السنغال في إطار آمن ومنظم يوفر بيئة مثالية للدراسة والانضباط والتفتح الشخصي." },
    "schools.int.f1":    { fr: "Hébergement sécurisé",  ar: "إقامة آمنة" },
    "schools.int.f2":    { fr: "Études surveillées",    ar: "دراسة مراقبة" },
    "schools.int.f3":    { fr: "Encadrement permanent", ar: "إشراف دائم" },
    "schools.int.f4":    { fr: "Accompagnement religieux", ar: "مرافقة دينية" },
    "schools.int.f5":    { fr: "Cadre moderne",         ar: "إطار حديث" },
    "schools.int.f6":    { fr: "Discipline et réussite", ar: "الانضباط والنجاح" },
    "schools.cta.text":  { fr: "Excellence académique • Formation franco-arabe • Encadrement de qualité • Éducation complète • Valeurs islamiques",
                           ar: "التميز الأكاديمي • التكوين الفرنسي العربي • الإشراف النوعي • التعليم الشامل • القيم الإسلامية" },

    /* ── Programmes — contenu détaillé ── */
    "prog.badge":        { fr: "Programme académique sénégalais + Formation franco-arabe",
                           ar: "البرنامج الأكاديمي السنغالي + التكوين الفرنسي العربي" },
    "prog.intro.p1":     { fr: "Au Complexe Scolaire Privé Franco-Arabe Mihyarou Souna, nos élèves suivent intégralement les programmes officiels définis par le Ministère de l'Éducation nationale du Sénégal.",
                           ar: "في مجمع ميهياروسونا، يتبع تلاميذنا كاملاً البرامج الرسمية التي يحددها وزير التعليم الوطني السنغالي." },
    "prog.intro.p2":     { fr: "Notre établissement associe les exigences du système éducatif sénégalais à un enseignement approfondi de la langue arabe, du Saint Coran et de l'éducation islamique afin de former des élèves compétents, responsables et enracinés dans leurs valeurs.",
                           ar: "تربط مؤسستنا متطلبات النظام التعليمي السنغالي بتعليم متعمق للغة العربية والقرآن الكريم والتربية الإسلامية بهدف تكوين تلاميذ أكفاء ومسؤولين ومتجذرين في قيمهم." },
    "prog.prescolaire.title":{ fr: "🧒 Préscolaire",    ar: "🧒 ما قبل المدرسة" },
    "prog.prescolaire.desc":{ fr: "Le cycle préscolaire favorise l'éveil, la socialisation et le développement harmonieux de l'enfant.",
                              ar: "تعزز مرحلة ما قبل المدرسة الوعي والاندماج الاجتماعي والنمو المتناسق للطفل." },
    "prog.pre.li1":      { fr: "Garderie",              ar: "الحضانة" },
    "prog.pre.li2":      { fr: "Crèche",                ar: "الروضة" },
    "prog.pre.li3":      { fr: "Préscolaire",            ar: "ما قبل المدرسة" },
    "prog.pre.li4":      { fr: "Développement du langage", ar: "تنمية اللغة" },
    "prog.pre.li5":      { fr: "Éveil intellectuel et motricité", ar: "الإيقاظ الفكري والحركية" },
    "prog.elem.title":   { fr: "📚 Élémentaire (CI à CM2)", ar: "📚 الابتدائي (من CI إلى CM2)" },
    "prog.elem.desc":    { fr: "Acquisition progressive des compétences fondamentales nécessaires à la réussite scolaire.",
                           ar: "اكتساب تدريجي للكفاءات الأساسية اللازمة للنجاح الدراسي." },
    "prog.elem.li1":     { fr: "Français",              ar: "الفرنسية" },
    "prog.elem.li2":     { fr: "Mathématiques",         ar: "الرياضيات" },
    "prog.elem.li3":     { fr: "Sciences",              ar: "العلوم" },
    "prog.elem.li4":     { fr: "Histoire-Géographie",   ar: "التاريخ والجغرافيا" },
    "prog.elem.li5":     { fr: "Arabe",                 ar: "اللغة العربية" },
    "prog.elem.li6":     { fr: "Coran",                 ar: "القرآن الكريم" },
    "prog.moyen.title":  { fr: "🎓 Cycle Moyen (6ème à 3ème)", ar: "🎓 المرحلة المتوسطة (من 6ème إلى 3ème)" },
    "prog.moyen.desc":   { fr: "Préparation aux examens nationaux et aux études secondaires.",
                           ar: "التحضير للامتحانات الوطنية والدراسات الثانوية." },
    "prog.moyen.li1":    { fr: "Français",              ar: "الفرنسية" },
    "prog.moyen.li2":    { fr: "Mathématiques",         ar: "الرياضيات" },
    "prog.moyen.li3":    { fr: "Sciences Physiques",    ar: "العلوم الفيزيائية" },
    "prog.moyen.li4":    { fr: "SVT",                   ar: "علوم الحياة والأرض" },
    "prog.moyen.li5":    { fr: "Anglais",               ar: "اللغة الإنجليزية" },
    "prog.moyen.li6":    { fr: "Histoire-Géographie",   ar: "التاريخ والجغرافيا" },
    "prog.moyen.li7":    { fr: "Arabe et Éducation islamique", ar: "العربية والتربية الإسلامية" },
    "prog.moyen.li8":    { fr: "Préparation au BFEM",   ar: "الإعداد لشهادة BFEM" },
    "prog.franco.title": { fr: "📖 Enseignement Franco-Arabe", ar: "📖 التعليم الفرنسي العربي" },
    "prog.franco.li1":   { fr: "Lecture et écriture arabe", ar: "القراءة والكتابة بالعربية" },
    "prog.franco.li2":   { fr: "Expression orale",      ar: "التعبير الشفهي" },
    "prog.franco.li3":   { fr: "Compréhension de textes", ar: "فهم النصوص" },
    "prog.franco.li4":   { fr: "Saint Coran",           ar: "القرآن الكريم" },
    "prog.franco.li5":   { fr: "Tajwid",                ar: "التجويد" },
    "prog.franco.li6":   { fr: "Hadith",                ar: "الحديث النبوي" },
    "prog.franco.li7":   { fr: "Fiqh et Akhlaq",        ar: "الفقه والأخلاق" },
    "prog.activites.title":{ fr: "⚽ Activités Complémentaires", ar: "⚽ الأنشطة التكميلية" },
    "prog.act.li1":      { fr: "Informatique",          ar: "الإعلام الآلي" },
    "prog.act.li2":      { fr: "Karaté",                ar: "الكاراتيه" },
    "prog.act.li3":      { fr: "Activités culturelles", ar: "الأنشطة الثقافية" },
    "prog.act.li4":      { fr: "Activités religieuses", ar: "الأنشطة الدينية" },
    "prog.act.li5":      { fr: "Sorties pédagogiques",  ar: "الرحلات التربوية" },
    "prog.services.title":{ fr: "🚍 Services proposés", ar: "🚍 الخدمات المقدمة" },
    "prog.srv.li1":      { fr: "Transport scolaire",    ar: "النقل المدرسي" },
    "prog.srv.li2":      { fr: "Cantine",               ar: "المطعم المدرسي" },
    "prog.srv.li3":      { fr: "Encadrement pédagogique", ar: "الإشراف التربوي" },
    "prog.srv.li4":      { fr: "Internat Al Bayan",     ar: "داخلية البيان" },
    "prog.srv.li5":      { fr: "Études surveillées",    ar: "الدراسة المراقبة" },
    "prog.cta.title":    { fr: "Discipline • Travail • Réussite", ar: "الانضباط • العمل • النجاح" },
    "prog.cta.text":     { fr: "Former des élèves capables de réussir dans le système éducatif sénégalais tout en maîtrisant la langue arabe et les valeurs islamiques.",
                           ar: "تكوين تلاميذ قادرين على النجاح في المنظومة التعليمية السنغالية مع إتقان اللغة العربية والقيم الإسلامية." },

    /* ── Admissions — contenu détaillé ── */
    "adm.h1.text":       { fr: "Admissions & Modalités", ar: "التسجيل والشروط" },
    "adm.redirect.msg":  { fr: "Les modalités sont maintenant regroupées avec la page Admissions.", ar: "تم دمج الشروط مع صفحة التسجيل." },
    "adm.sub.text":      { fr: "Une page compacte pour consulter les dossiers à fournir, les conditions d'inscription, les options et les frais de scolarité 2026–2027 des sites Parcelles Assainies, Keur Massar et de l'Internat Al Bayan.",
                           ar: "صفحة مدمجة للاطلاع على الملفات المطلوبة وشروط التسجيل والتكاليف الدراسية 2026–2027 لمواقع بارسيل الصحية وكير مصار وداخلية البيان." },
    "adm.docs.pre.title":{ fr: "Préscolaire – Élémentaire", ar: "ما قبل المدرسة – الابتدائي" },
    "adm.docs.pre.li1":  { fr: "Certificat de scolarité pour les nouveaux élèves ;", ar: "شهادة التمدرس للتلاميذ الجدد ؛" },
    "adm.docs.pre.li2":  { fr: "01 extrait de naissance.", ar: "01 مستخرج من شهادة الميلاد." },
    "adm.docs.moy.title":{ fr: "Moyen – Secondaire",   ar: "المتوسط – الثانوي" },
    "adm.docs.moy.li1":  { fr: "01 certificat de scolarité pour les nouveaux élèves ;", ar: "01 شهادة تمدرس للتلاميذ الجدد ؛" },
    "adm.docs.moy.li2":  { fr: "01 extrait de naissance ;", ar: "01 مستخرج من شهادة الميلاد ؛" },
    "adm.docs.moy.li3":  { fr: "Le dernier bulletin de notes.", ar: "آخر كشف النقاط." },
    "adm.notes.title":   { fr: "⚠️ Notes importantes", ar: "⚠️ ملاحظات مهمة" },
    "adm.notes.li1":     { fr: "Les droits d'inscription ne sont pas remboursables.", ar: "رسوم التسجيل غير قابلة للاسترداد." },
    "adm.notes.li2":     { fr: "À partir de plus de quatre enfants d'une même famille inscrits à l'établissement, une exonération de mensualité peut être accordée selon les conditions de l'administration ; l'inscription reste obligatoire.",
                           ar: "عند تسجيل أكثر من أربعة أطفال من نفس العائلة في المؤسسة، يمكن منح إعفاء من الاشتراك الشهري وفق شروط الإدارة مع بقاء التسجيل إلزامياً." },
    "adm.notes.li3":     { fr: "L'uniforme fait partie des frais de scolarité.", ar: "الزي المدرسي جزء من مصاريف التمدرس." },
    "adm.badge.cantine": { fr: "Cantine",               ar: "مطعم" },
    "adm.badge.transport":{ fr: "Transport : 10.000 F", ar: "النقل : 10.000 ف" },
    "adm.badge.karate":  { fr: "Karaté",                ar: "كاراتيه" },
    "adm.badge.info":    { fr: "Informatique",          ar: "إعلام آلي" },
    "adm.pa.title":      { fr: "🏫 Parcelles Assainies", ar: "🏫 بارسيل الصحية" },
    "adm.pa.addr.label": { fr: "Adresse :",             ar: "العنوان :" },
    "adm.pa.desc":       { fr: "École franco-arabe du cycle élémentaire, du CI au CM2, dans un cadre moderne et accessible.",
                           ar: "مدرسة فرنسية عربية للمرحلة الابتدائية، من CI إلى CM2، في إطار حديث وميسور الوصول." },
    "adm.km.title":      { fr: "🏫 Keur Massar",        ar: "🏫 كير مصار" },
    "adm.km.addr.label": { fr: "Adresse :",             ar: "العنوان :" },
    "adm.km.addr.val":   { fr: "Aïnoumady / Quartier Ainoumady N°135 – Keur Massar – Dakar",
                           ar: "Aïnoumady / Quartier Ainoumady N°135 – Keur Massar – Dakar" },
    "adm.km.desc":       { fr: "Site complet : garderie, préscolaire, élémentaire, moyen jusqu'à la 3ème BFEM, avec Internat Al Bayan intégré.",
                           ar: "موقع متكامل : حضانة، ما قبل المدرسة، ابتدائي، متوسط حتى 3ème BFEM، مع داخلية البيان المدمجة." },
    "adm.table.title":   { fr: "💰 Modalités 2026–2027 — Selon le site", ar: "💰 الرسوم 2026–2027 — حسب الموقع" },
    "adm.table.th1":     { fr: "Classe",               ar: "المستوى" },
    "adm.table.th2":     { fr: "Inscription",          ar: "التسجيل" },
    "adm.table.th3":     { fr: "Mensualité",           ar: "الشهري" },
    "adm.table.th4":     { fr: "Période",              ar: "الفترة" },
    "adm.table.th5":     { fr: "Horaires",             ar: "التوقيت" },
    "adm.row.garderie":  { fr: "Garderie",             ar: "الحضانة" },
    "adm.row.garderie.age":{ fr: "01 à 2½ ans",        ar: "01 إلى 2½ سنة" },
    "adm.row.prescolaire":{ fr: "Préscolaire",         ar: "ما قبل المدرسة" },
    "adm.row.prescolaire.age":{ fr: "2½ à 05 ans",     ar: "2½ إلى 05 سنوات" },
    "adm.row.ci_cp":     { fr: "CI – CP",              ar: "CI – CP" },
    "adm.row.ce1_ce2":   { fr: "CE1 – CE2",            ar: "CE1 – CE2" },
    "adm.row.cm1":       { fr: "CM1",                  ar: "CM1" },
    "adm.row.cm2":       { fr: "CM2",                  ar: "CM2" },
    "adm.row.6_5":       { fr: "6ème / 5ème",          ar: "6ème / 5ème" },
    "adm.row.4":         { fr: "4ème",                 ar: "4ème" },
    "adm.row.3":         { fr: "3ème",                 ar: "3ème" },
    "adm.period":        { fr: "Octobre à Mai",        ar: "أكتوبر إلى مايو" },
    "adm.hours.gard":    { fr: "Lun–Ven 08h–18h",      ar: "الاثنين–الجمعة 08:00–18:00" },
    "adm.hours.pre":     { fr: "Lun–Jeu 08h–14h / Ven 08h–13h", ar: "الاثنين–الخميس 08:00–14:00 / الجمعة 08:00–13:00" },
    "adm.hours.elem":    { fr: "08h–14h / 16h–18h, Lun–Ven", ar: "08:00–14:00 / 16:00–18:00، الاثنين–الجمعة" },
    "adm.hours.moy":     { fr: "08h–18h Lun–Ven / Sam 08h–14h", ar: "08:00–18:00 الاثنين–الجمعة / السبت 08:00–14:00" },
    "adm.internat.title":{ fr: "🏠 Internat Al Bayan",  ar: "🏠 داخلية البيان" },
    "adm.internat.desc": { fr: "Internat moderne intégré au complexe de Keur Massar pour l'accueil, l'encadrement et le suivi des pensionnaires.",
                           ar: "داخلية حديثة مدمجة في مجمع كير مصار لاستقبال الطلاب الداخليين وتوجيههم ومتابعتهم." },
    "adm.internat.li1":  { fr: "Cadre sécurisé et organisé ;", ar: "إطار آمن ومنظم ؛" },
    "adm.internat.li2":  { fr: "Études surveillées ;",   ar: "دراسة مراقبة ؛" },
    "adm.internat.li3":  { fr: "Encadrement religieux et moral ;", ar: "إشراف ديني وأخلاقي ؛" },
    "adm.internat.li4":  { fr: "Accompagnement des élèves venant de différentes localités.", ar: "مرافقة التلاميذ القادمين من مختلف المناطق." },
    "adm.contacts.title":{ fr: "📞 Contacts inscriptions", ar: "📞 جهات الاتصال للتسجيل" },
    "adm.contacts.tel.label":{ fr: "Téléphones :",      ar: "الهواتف :" },
    "adm.contacts.email.label":{ fr: "Emails :",        ar: "البريد الإلكتروني :" },
    "adm.contacts.devise.label":{ fr: "Devise :",       ar: "الشعار :" },
    "adm.contacts.devise.val":{ fr: "Discipline • Travail • Réussite", ar: "الانضباط • العمل • النجاح" },
    "adm.cta.title":     { fr: "Préparer l'inscription", ar: "الاستعداد للتسجيل" },
    "adm.cta.text2":     { fr: "Rassemblez les pièces demandées puis contactez l'administration pour confirmer la disponibilité des places et les modalités du site choisi.",
                           ar: "جمّع الوثائق المطلوبة ثم تواصل مع الإدارة للتأكد من توفر الأماكن وشروط الموقع المختار." },


    /* ── Portail Parents / Professeurs ── */
    "login.title":       { fr: "Parents / Professeurs", ar: "الأولياء / الأساتذة" },
    "login.lead":        { fr: "Un portail dédié au suivi scolaire, aux échanges avec l’administration et à l’accompagnement des élèves dans leur parcours éducatif.",
                           ar: "بوابة مخصصة للمتابعة المدرسية والتواصل مع الإدارة ومرافقة التلاميذ في مسارهم التربوي." },
    "login.feature1":    { fr: "👨‍👩‍👧 Parents : suivi des informations scolaires et administratives",
                           ar: "👨‍👩‍👧 الأولياء : متابعة المعلومات المدرسية والإدارية" },
    "login.feature2":    { fr: "👩‍🏫 Professeurs : accès aux outils pédagogiques et communications",
                           ar: "👩‍🏫 الأساتذة : الوصول إلى الأدوات التربوية والتواصل" },
    "login.feature3":    { fr: "🔐 Accès sécurisé réservé aux membres autorisés",
                           ar: "🔐 دخول آمن مخصص للأعضاء المصرح لهم" },
    "login.secure":      { fr: "Portail sécurisé", ar: "بوابة آمنة" },
    "login.connexion":   { fr: "Connexion", ar: "تسجيل الدخول" },
    "login.hint":        { fr: "Connectez-vous à votre espace pour accéder aux services réservés aux parents et professeurs.",
                           ar: "سجّل الدخول إلى فضائك للوصول إلى الخدمات المخصصة للأولياء والأساتذة." },
    "login.profil":      { fr: "Profil", ar: "الصفة" },
    "login.parent":      { fr: "Parent", ar: "ولي الأمر" },
    "login.prof":        { fr: "Professeur", ar: "أستاذ" },
    "login.admin":       { fr: "Administration", ar: "الإدارة" },
    "login.identifiant": { fr: "Identifiant", ar: "المعرّف" },
    "login.identifiant.ph": { fr: "Votre identifiant", ar: "معرّفك" },
    "login.password":    { fr: "Mot de passe", ar: "كلمة المرور" },
    "login.password.ph": { fr: "Votre mot de passe", ar: "كلمة المرور الخاصة بك" },
    "login.btn":         { fr: "Se connecter", ar: "تسجيل الدخول" },
    "login.forgot":      { fr: "Mot de passe oublié ?", ar: "هل نسيت كلمة المرور؟" },
    "login.access":      { fr: "Demander un accès", ar: "طلب حساب دخول" },
    "login.notice":      { fr: "Pour obtenir vos identifiants, veuillez contacter l’administration de l’établissement.",
                           ar: "للحصول على بيانات الدخول، يرجى التواصل مع إدارة المؤسسة." },
    "login.back":        { fr: "← Retour à l’accueil", ar: "← العودة إلى الرئيسية" },
    "login.alert":       { fr: "Portail en cours de configuration.", ar: "البوابة قيد الإعداد." },

    /* ── Navigation admissions (lien sans data-i18n) ── */
    "nav.admissions":    { fr: "Admissions & Modalités", ar: "التسجيل والشروط" },
    "nav.portal":        { fr: "Parents / Professeurs",  ar: "الأولياء / الأساتذة" },

    /* ── Footer nav ── */
    "footer.nav.home":   { fr: "Accueil",               ar: "الرئيسية" },
    "footer.nav.schools":{ fr: "Nos écoles",             ar: "مدارسنا" },
    "footer.nav.programs":{ fr: "Programmes",            ar: "البرامج" },
    "footer.nav.adm":    { fr: "Admissions",             ar: "التسجيل" },
    "footer.nav.contact":{ fr: "Contact",                ar: "اتصل بنا" },
    "footer.nav.portal": { fr: "Portail",                ar: "البوابة" },
    "footer.subscribe":  { fr: "S'abonner",              ar: "اشترك" },
  };

  /* ─── Utilitaires ──────────────────────────────── */
  var LANG_KEY = 'ms_lang';

  function getLang() {
    var stored = localStorage.getItem(LANG_KEY);
    if (!stored) {
      // Première visite : forcer le français par défaut
      localStorage.setItem(LANG_KEY, 'fr');
      return 'fr';
    }
    return stored;
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    var isAr = lang === 'ar';

    /* direction + attribut html */
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    /* traduire tous les éléments data-i18n */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[key] && T[key][lang] !== undefined) {
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = T[key][lang];
        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = T[key][lang];
        } else {
          el.textContent = T[key][lang];
        }
      }
    });


    /* traduction des textes non balisés data-i18n */
    autoTranslateUnmarked(lang);

    /* mettre à jour le switcher */
    var btns = document.querySelectorAll('.lang-btn');
    btns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }


  function buildAutoMap(lang) {
    var map = {};
    Object.keys(T).forEach(function (key) {
      var item = T[key];
      if (!item || !item.fr || item[lang] === undefined) return;
      var fr = String(item.fr).replace(/<[^>]+>/g, '').trim();
      var target = String(item[lang]).replace(/<[^>]+>/g, '').trim();
      if (!fr || !target) return;
      map[fr] = target;
    });
    return map;
  }

  function autoTranslateUnmarked(lang) {
    var map = buildAutoMap(lang);
    var skipTags = {SCRIPT:1, STYLE:1, NOSCRIPT:1, SVG:1};
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = node.parentElement;
        if (!p || skipTags[p.tagName]) return NodeFilter.FILTER_REJECT;
        if (p.closest('[data-i18n]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function(node) {
      if (!node.__msOriginalText) node.__msOriginalText = node.nodeValue;
      var original = node.__msOriginalText;
      if (lang === 'fr') {
        node.nodeValue = original;
        return;
      }
      var trimmed = original.trim();
      if (map[trimmed]) {
        node.nodeValue = original.replace(trimmed, map[trimmed]);
      }
    });

    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function(el) {
      if (!el.__msOriginalPlaceholder) el.__msOriginalPlaceholder = el.getAttribute('placeholder');
      var ph = el.__msOriginalPlaceholder;
      if (lang === 'fr') {
        el.setAttribute('placeholder', ph);
      } else if (map[ph]) {
        el.setAttribute('placeholder', map[ph]);
      }
    });
  }


  /* ─── Injection du switcher ────────────────────── */
  /* Drapeaux SVG inline */
  var FLAGS = {
    fr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><clipPath id="c"><circle cx="10" cy="10" r="10"/></clipPath><g clip-path="url(#c)"><rect x="0" y="0" width="6.66" height="20" fill="#002395"/><rect x="6.66" y="0" width="6.68" height="20" fill="#fff"/><rect x="13.34" y="0" width="6.66" height="20" fill="#ED2939"/></g><circle cx="10" cy="10" r="9.5" fill="none" stroke="rgba(0,0,0,.10)" stroke-width="1"/></svg>',
    ar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><clipPath id="d"><circle cx="10" cy="10" r="10"/></clipPath><g clip-path="url(#d)"><rect x="0" y="0" width="20" height="6.66" fill="#006233"/><rect x="0" y="6.66" width="20" height="6.68" fill="#fff"/><rect x="0" y="13.34" width="20" height="6.66" fill="#006233"/></g><circle cx="10" cy="10" r="9.5" fill="none" stroke="rgba(0,0,0,.10)" stroke-width="1"/></svg>'
  };

  function injectSwitcher() {
    var style = document.createElement('style');
    style.textContent = [
      '.lang-switcher{display:flex;align-items:center;gap:4px;margin-right:14px;flex-shrink:0;border-left:1px solid #e0e8e8;padding-left:14px}',
      '.lang-btn{display:flex;align-items:center;gap:7px;height:34px;padding:0 11px 0 7px;border-radius:999px;border:1.5px solid transparent;background:transparent;color:#3a4a5a;font-size:12.5px;font-weight:700;cursor:pointer;transition:background .16s,border-color .16s,color .16s;white-space:nowrap;letter-spacing:.02em}',
      '.lang-btn svg{display:block;flex-shrink:0}',
      '.lang-btn:hover{background:#f0f7f6;border-color:#c5dedd;color:#075e57}',
      '.lang-btn.active{background:#eaf5f4;border-color:#075e57;color:#075e57;font-weight:800}',
      '.lang-btn.active circle:last-child{stroke:#075e57;stroke-width:2}',
      '[dir=rtl] .header{flex-direction:row-reverse}',
      '[dir=rtl] .nav{flex-direction:row-reverse}',
      '[dir=rtl] .lang-switcher{margin-right:0;margin-left:14px;border-left:none;border-right:1px solid #e0e8e8;padding-left:0;padding-right:14px}',
      '[dir=rtl] .ms-footer-brand{flex-direction:row-reverse}',
      '[dir=rtl] .ms-footer-wrap{direction:rtl}',
      '[dir=rtl] body{font-family:Arial,sans-serif}',
      '@media(max-width:767px){.lang-switcher{margin-right:4px;padding-left:8px;gap:2px}.lang-btn{height:30px;padding:0 7px 0 5px;font-size:11px;gap:5px}.lang-btn svg{width:16px;height:16px}}'
    ].join('');
    document.head.appendChild(style);

    var switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML =
      '<button class="lang-btn" data-lang="fr">' + FLAGS.fr + '<span>FR</span></button>' +
      '<button class="lang-btn" data-lang="ar">' + FLAGS.ar + '<span>العربية</span></button>';

    /* insérer avant le bouton portail dans le header */
    var header = document.querySelector('.header');
    var spaceBtn = document.querySelector('.space-btn');
    if (header && spaceBtn) {
      header.insertBefore(switcher, spaceBtn);
    } else if (header) {
      header.appendChild(switcher);
    } else {
      switcher.style.position = 'fixed';
      switcher.style.top = '14px';
      switcher.style.right = '14px';
      switcher.style.zIndex = '99999';
      switcher.style.background = '#fff';
      switcher.style.borderRadius = '999px';
      switcher.style.boxShadow = '0 8px 24px rgba(0,0,0,.12)';
      switcher.style.padding = '4px';
      document.body.insertBefore(switcher, document.body.firstChild);
    }

    switcher.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (btn) setLang(btn.getAttribute('data-lang'));
    });
  }

  /* ─── Init ─────────────────────────────────────── */
  function init() {
    injectSwitcher();
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
