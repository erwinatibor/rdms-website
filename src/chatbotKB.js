// RDMS Assistant Knowledge Base
// Extracted from RDMS Chatbot Development Questionnaire

export const botConfig = {
  name: 'RDMS Assistant',
  greeting: "Hello and welcome to RDMS! I'm here to help you learn about oral health, RDMS programs, research, events, and support services. How may I assist you today?",
  fallback: "I'm sorry, I don't have a confirmed answer to that right now. I can connect you to RDMS contact details or direct you to the appropriate team for further support.",
  closing: "Thank you for contacting RDMS! We're glad to support your oral health and learning journey. If you need more help, please reach out again or contact our team directly.",
  disclaimer: "This chatbot provides general oral health information and is not a substitute for professional dental or medical advice, diagnosis, or treatment.",
};

export const quickReplies = [
  { label: 'Learn about RDMS', key: 'about_rdms' },
  { label: 'Oral health tips', key: 'oral_tips' },
  { label: 'Research & training', key: 'research' },
  { label: 'Programs & events', key: 'programs' },
  { label: 'Contact RDMS', key: 'contact' },
  { label: 'Emergency guidance', key: 'emergency' },
  { label: 'Membership', key: 'membership' },
];

export const knowledgeBase = [
  // ── About RDMS ──
  {
    keys: ['about_rdms'],
    triggers: ['what is rdms', 'about rdms', 'tell me about', 'who is rdms', 'what does rdms do', 'rdms rwanda', 'dento-medical', 'dento medical'],
    answer: "**RDMS (Dento-Medical Society Rwanda)** is a nonprofit professional organization based in Ngoma, Huye, in the south of Rwanda. We unite dental and medical students and professionals to promote oral and public health through outreach, research, innovation, and partnerships.\n\nRegistered under RDB as a Non-Profit Limited by Guarantee (Code: 143885158), RDMS operates from Huye and reaches communities across Rwanda.",
  },
  {
    triggers: ['mission', 'what is your mission'],
    answer: "**Our Mission:** To unite dental surgeons, dental therapists, and public health professionals in advancing integrated oral health services, research, advocacy, and community-based care in Rwanda and beyond.",
  },
  {
    triggers: ['vision', 'what is your vision'],
    answer: "**Our Vision:** RDMS envisions a Rwanda where oral health is fully integrated into general healthcare, accessible to every community, and driven by evidence-based practice and collaboration.",
  },
  {
    triggers: ['values', 'what are your values'],
    answer: "**RDMS Values:**\n• Compassion — Caring for communities\n• Accountability — Transparent operations\n• Equity — Equal access to health\n• Collaboration — Working together across disciplines",
  },
  {
    triggers: ['where', 'location', 'based', 'address', 'headquarters'],
    answer: "RDMS is headquartered in **Huye, Rwanda**. Our programs reach communities across Rwanda through outreach, mobile clinics, school programs, and community partnerships.",
  },

  // ── Services ──
  {
    keys: ['programs'],
    triggers: ['services', 'programs', 'what do you offer', 'activities', 'events', 'campaigns'],
    answer: "**RDMS Services & Programs:**\n• Community health outreach & awareness campaigns\n• Oral health education in schools\n• Mobile dental & medical clinics\n• Research collaboration & innovation\n• Mentorship & training programs\n• Seminars & conferences\n• Dental Medicine Chronicles (educational series)\n• Public engagement events\n\nMost public education and outreach services are free and community-oriented.",
  },
  {
    triggers: ['chronicles', 'dental medicine chronicles', 'dmc', 'episodes'],
    answer: "**Dental Medicine Chronicles** is RDMS's educational series that covers key topics in oral health, public health, and dentistry. Each episode features expert discussions, case insights, and practical takeaways for students and professionals.\n\nAsk me about a specific topic and I can guide you to relevant content!",
  },
  {
    triggers: ['mobile clinic', 'clinics', 'dental camp', 'dental service', 'outreach service'],
    answer: "RDMS delivers services through **outreach-based and partnership-based models**, including:\n• Mobile dental & medical clinics\n• School-based screening programs\n• Community health events\n\nService locations are announced per event. Programs operate according to announced schedules rather than fixed daily hours.",
  },
  {
    triggers: ['school', 'education program', 'children', 'pupils', 'screening'],
    answer: "RDMS conducts **oral health education and screening in schools**, teaching children proper brushing techniques, cavity prevention, and the importance of good oral hygiene from an early age.\n\nOur school programs target children from preschool through adolescence with age-appropriate guidance.",
  },

  // ── Oral Health Tips ──
  {
    keys: ['oral_tips'],
    triggers: ['oral health tip', 'dental tip', 'hygiene tip', 'brushing', 'how to brush', 'oral hygiene', 'health tips'],
    answer: "**Essential Oral Health Tips:**\n🦷 Brush twice daily for 2 minutes with fluoride toothpaste\n🦷 Floss at least once a day\n🦷 Limit sugary foods and drinks\n🦷 Visit a dentist regularly for check-ups\n🦷 Replace your toothbrush every 3 months\n🦷 Don't ignore bleeding gums — it may signal gum disease\n🦷 Drink water after meals to rinse away bacteria\n\nWould you like tips on a specific topic?",
  },
  {
    triggers: ['bad breath', 'halitosis', 'mouth smell'],
    answer: "**Bad Breath (Halitosis) Tips:**\n• Brush your teeth and tongue twice daily\n• Floss daily to remove food particles\n• Stay hydrated — dry mouth causes odor\n• Avoid tobacco products\n• Limit strong-smelling foods (garlic, onions)\n• See a dentist if bad breath persists — it could indicate gum disease or other conditions\n\n⚕️ *Persistent bad breath may need professional evaluation.*",
  },
  {
    triggers: ['cavity', 'cavities', 'tooth decay', 'caries'],
    answer: "**About Cavities (Tooth Decay):**\nCavities form when bacteria in your mouth produce acids that erode tooth enamel.\n\n**Prevention:**\n• Brush with fluoride toothpaste\n• Reduce sugar intake\n• Floss daily\n• Get regular dental check-ups\n• Consider dental sealants for children\n\n⚕️ *If you suspect a cavity, please visit a dental professional for proper diagnosis and treatment.*",
  },
  {
    triggers: ['gum', 'gum disease', 'gingivitis', 'periodontitis', 'bleeding gum', 'gums bleed'],
    answer: "**Gum Disease Information:**\n**Gingivitis** (early stage) — red, swollen, bleeding gums. Reversible with good hygiene.\n**Periodontitis** (advanced) — can lead to tooth loss if untreated.\n\n**Prevention:**\n• Brush gently along the gumline\n• Floss daily\n• Don't skip dental visits\n• Quit smoking\n\n⚕️ *If your gums bleed regularly, please consult a dental professional.*",
  },
  {
    triggers: ['toothache', 'tooth pain', 'teeth hurt', 'pain in tooth'],
    answer: "**Toothache Guidance:**\n• Rinse with warm salt water\n• Use dental floss to remove any trapped food\n• Apply a cold compress to reduce swelling\n• Take over-the-counter pain relief if needed\n\n⚠️ **Important:** A persistent toothache needs professional attention. Please visit a dentist as soon as possible.\n\n⚕️ *This is general guidance only, not a diagnosis.*",
  },
  {
    triggers: ['pregnancy', 'pregnant', 'oral health pregnancy', 'prenatal dental'],
    answer: "**Oral Health During Pregnancy:**\n• Hormonal changes can increase risk of gum disease\n• Morning sickness acid can erode enamel — rinse with water after\n• Maintain regular brushing and flossing\n• Dental check-ups during pregnancy are safe and recommended\n• Tell your dentist you are pregnant\n\n⚕️ *For specific concerns, please consult your healthcare provider.*",
  },
  {
    triggers: ['diabetes', 'diabetic', 'sugar disease'],
    answer: "**Oral Health & Diabetes:**\nDiabetes increases the risk of gum disease, dry mouth, and slow healing.\n\n**Tips:**\n• Control blood sugar levels\n• Brush and floss diligently\n• Visit your dentist regularly\n• Watch for signs of gum disease\n• Stay hydrated\n\n⚕️ *Managing diabetes well helps protect your oral health. Consult your healthcare team.*",
  },
  {
    triggers: ['oral cancer', 'mouth cancer'],
    answer: "**Oral Cancer Awareness:**\nEarly detection saves lives. Watch for:\n• Persistent mouth sores\n• White or red patches\n• Difficulty swallowing\n• Unexplained bleeding\n• Lumps or thickening\n\n⚠️ If you notice any of these symptoms lasting more than 2 weeks, please see a healthcare professional immediately.",
  },
  {
    triggers: ['ectodermal dysplasia', 'ed ', 'ectodermal'],
    answer: "**Ectodermal Dysplasia:**\nA group of genetic conditions affecting teeth, hair, nails, and sweat glands. Dental effects may include missing or misshapen teeth.\n\nRDMS supports awareness through **World Ectodermal Dysplasia Day** activities and educational outreach.\n\n⚕️ *For specific guidance, please consult a specialist.*",
  },
  {
    triggers: ['cleft', 'cleft lip', 'cleft palate'],
    answer: "**Cleft Lip & Palate:**\nA birth condition where the lip or roof of the mouth doesn't fully close during development. It can affect feeding, speech, and dental health.\n\nTreatment typically involves surgery, dental care, and speech therapy. Early intervention is key.\n\n⚕️ *Please consult a qualified specialist for diagnosis and treatment planning.*",
  },
  {
    triggers: ['child', 'baby teeth', 'kids dental', 'infant oral', 'children dental'],
    answer: "**Children's Dental Health:**\n• Clean gums with a soft cloth before teeth appear\n• Start brushing when first tooth erupts\n• Use a rice-grain sized amount of fluoride toothpaste for under 3\n• Pea-sized amount for ages 3-6\n• First dental visit by age 1\n• Limit sugary snacks and drinks\n• Supervise brushing until age 7-8\n\n👨‍👩‍👧 *Parents/guardians should be actively involved in children's oral care.*",
  },

  // ── Research & Training ──
  {
    keys: ['research'],
    triggers: ['research', 'training', 'academy', 'research academy', 'learn', 'study', 'cpd', 'professional development', 'workshop', 'seminar', 'mentorship'],
    answer: "**RDMS Research Academy:**\nOur academy supports students and professionals through:\n• Research methods & proposal development\n• Scientific communication & ethics\n• Oral health education content\n• Public health topics\n• Mentorship programs\n• Workshops & seminars\n• Continuing Professional Development (CPD)\n\nWe also produce the **Dental Medicine Chronicles** series for ongoing learning.\n\nWant to know about a specific topic? Just ask!",
  },
  {
    triggers: ['publication', 'article', 'paper'],
    answer: "RDMS supports research publications and academic development. Our Research Academy helps with proposal development, scientific communication, and connecting researchers with collaboration opportunities.\n\nContact our Research team: **lucretializa@gmail.com**",
  },

  // ── Contact ──
  {
    keys: ['contact'],
    triggers: ['contact', 'reach', 'email', 'phone', 'call', 'how to contact', 'get in touch'],
    answer: "**Contact RDMS:**\n\n📞 **Phone:** +250 791 840 679\n\n📧 **General inquiries:**\nnatukundasharon835@gmail.com\nigisubizojimmy@gmail.com\n\n📧 **Research:** lucretializa@gmail.com\n📧 **Partnerships:** dr.steven315@gmail.com\n📧 **Donations:** dushimitangal@gmail.com\n📧 **Membership:** khalirwanda@gmail.com\n📧 **All communications:** rdmspresident13@gmail.com",
  },
  {
    triggers: ['donate', 'donation', 'sponsor', 'sponsorship', 'support financially', 'give money', 'fund'],
    answer: "Thank you for your interest in supporting RDMS! Your contribution helps fund outreach, education, and research programs.\n\n📧 **For donations & sponsorships:** dushimitangal@gmail.com\n📧 **General:** rdmspresident13@gmail.com\n\nEvery contribution makes a difference in advancing oral health in Rwanda!",
  },
  {
    triggers: ['partner', 'partnership', 'collaborate', 'collaboration', 'mou'],
    answer: "RDMS welcomes partnerships with schools, clinics, NGOs, government health programs, and international organizations.\n\n📧 **Partnership inquiries:** dr.steven315@gmail.com\n📧 **General:** rdmspresident13@gmail.com\n\nLet's work together to improve oral and public health in Rwanda!",
  },

  // ── Membership ──
  {
    keys: ['membership'],
    triggers: ['join', 'member', 'membership', 'sign up', 'register', 'how to join', 'become a member', 'volunteer'],
    answer: "**Join RDMS:**\nAny enrolled dental or medical student and professionals who share a commitment to community service can join.\n\n✅ **No membership fee** — RDMS operates as a volunteer, student-led nonprofit.\n\n📧 **Membership requests:** khalirwanda@gmail.com\n📧 **General:** rdmspresident13@gmail.com\n\nRegistration may also be available through our website forms, Google Forms, or WhatsApp.",
  },
  {
    triggers: ['fee', 'cost', 'free', 'price', 'payment'],
    answer: "RDMS operates as a **volunteer, student-led nonprofit**. Participation is free, with support from donations and grants. Most public education, awareness, and outreach activities are community-oriented and free of charge.\n\nSome professional training or special programs may have specific requirements depending on the event or partnership.",
  },

  // ── Emergency ──
  {
    keys: ['emergency'],
    triggers: ['emergency', 'urgent', 'severe pain', 'swelling', 'trauma', 'bleeding', 'fever', 'breathing', 'accident', 'knocked out tooth', 'broken tooth'],
    answer: "⚠️ **DENTAL EMERGENCY GUIDANCE:**\n\nThis issue may require **urgent professional care**. Please:\n\n1. **Visit the nearest dental clinic or hospital immediately**\n2. Do not delay seeking professional help\n3. For severe swelling, fever, or breathing difficulty — go to the emergency room\n\n📞 **RDMS Contact:** +250 791 840 679\n\n⚕️ *This chatbot cannot diagnose or treat emergencies. Please seek immediate in-person care.*",
  },

  // ── Events ──
  {
    triggers: ['world oral health day', 'wohd', 'march 20'],
    answer: "**World Oral Health Day (March 20):**\nRDMS actively participates in World Oral Health Day celebrations with community outreach, education campaigns, and awareness activities.\n\nStay connected with RDMS for announcements about upcoming WOHD events!",
  },
  {
    triggers: ['ectodermal dysplasia day', 'february 20'],
    answer: "**World Ectodermal Dysplasia Day (February 20):**\nRDMS raises awareness about ectodermal dysplasia through educational outreach and community engagement on this important day.\n\nFollow RDMS for updates on awareness activities!",
  },

  // ── Greetings & Small Talk ──
  {
    triggers: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
    answer: "Hello! Welcome to RDMS. I'm here to help you with oral health information, RDMS programs, research opportunities, and more. How can I assist you today?",
  },
  {
    triggers: ['thank', 'thanks', 'thank you', 'merci'],
    answer: "You're welcome! If you have any other questions, feel free to ask. RDMS is here to support your oral health and learning journey!",
  },
  {
    triggers: ['bye', 'goodbye', 'see you', 'exit', 'quit', 'end'],
    answer: "Thank you for contacting RDMS! We're glad to support your oral health and learning journey. If you need more help, please reach out again or contact our team directly. Take care!",
  },
];
