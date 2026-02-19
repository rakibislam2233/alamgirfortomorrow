export type Language = "bn" | "en";

export interface Milestone {
  year: string;
  event: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}

export interface ContributionItem {
  title: string;
  description: string;
}

export interface SiteLanguageData {
  name: string;
  displayTitle: string;
  title: string;
  party: string;
  constituency: string;
  slogan: string;
  hero: {
    tagline: string;
    subline: string;
    cta: string;
    quote: string;
  };
  about: {
    title: string;
    subtitle: string;
    content: string;
    history: string;
    fullBio: {
      birth: string;
      education: string;
      professional: string;
      milestones: Milestone[];
    };
  };
  commitments: Achievement[];
  achievements: Achievement[];
  contributions: {
    national: ContributionItem[];
    local: ContributionItem[];
  };
  contact: {
    address: string;
    phone: string;
    email: string;
  };
}

export interface SiteData {
  bn: SiteLanguageData;
  en: SiteLanguageData;
  social: {
    facebook: string;
    twitter: string;
  };
}

export const SITE_DATA: SiteData = {
  bn: {
    name: "মির্জা ফখরুল ইসলাম আলমগীর",
    displayTitle: "Alamgirfortomorrow",
    title: "সংসদ সদস্য, ঠাকুরগাঁও-১",
    party: "মহাসচিব, বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)",
    constituency: "ঠাকুরগাঁও-১",
    slogan: "নতুন দিনের পথে — ঠাকুরগাঁও",
    hero: {
      tagline: "বাংলাদেশের মুক্তির পথে যাত্রা: ঠাকুরগাঁওয়ে নতুন যুগ",
      subline:
        "আপনার ঘর, আপনার পাড়া, আপনার জেলা নিরাপদ রাখা আমাদের দায়িত্ব। জনতাই শক্তি।",
      cta: "সমস্যা জানান",
      quote:
        "আমরা এমন রাষ্ট্র চাই, যা নাগরিকের স্বপ্ন বাস্তবায়নের সক্ষমতা রাখে। আপনার ঘর, আপনার পাড়া, আপনার জেলা নিরাপদ রাখা আমাদের দায়িত্ব।",
    },
    about: {
      title: "মির্জা ফখরুল ইসলাম আলমগীর: রাজনীতি ও জনসেবার জীবন",
      subtitle:
        "ছাত্র আন্দোলন থেকে জাতীয় নেতৃত্ব পর্যন্ত এক ধারাবাহিক সংগ্রাম ও জনসেবার যাত্রা",
      content:
        "১৯৬৯ সালের ছাত্র আন্দোলন থেকে শুরু করে ঠাকুরগাঁও পৌরসভার চেয়ারম্যান, জাতীয় সংসদ সদস্য, কৃষি ও বেসামরিক বিমান ও পর্যটন প্রতিমন্ত্রী এবং ২০১৬ সাল থেকে বিএনপির মহাসচিব—মির্জা ফখরুল ইসলাম আলমগীরের দীর্ঘ পথচলা বুদ্ধিবৃত্তিক দৃঢ়তা, তৃণমূল আন্দোলন ও জাতীয় নেতৃত্বের অনন্য এক সমন্বয়। ছাত্রনেতা থেকে বিএনপির মহাসচিব পর্যন্ত তাঁর যাত্রা গণতন্ত্র ও উন্নয়নের প্রতি অঙ্গীকারের প্রতিফলন।",
      history:
        "তিনি ১৯৮৮ থেকে ১৯৯০ সাল পর্যন্ত ঠাকুরগাঁওয়ের মেয়র হিসেবে সফলভাবে দায়িত্ব পালন করেন। তিনি ঠাকুরগাঁও সরকারি কলেজের অর্থনীতির প্রভাষক ছিলেন এবং ইএসডিও (ESDO)-এর প্রতিষ্ঠাতা চেয়ারম্যান।",
      fullBio: {
        birth: "১৯৪৮ সালের ২৬ জানুয়ারি, ঠাকুরগাঁও",
        education:
          "ঢাকা কলেজ (এইচএসসি), ঢাকা বিশ্ববিদ্যালয় (অর্থনীতিতে স্নাতক ও স্নাতকোত্তর)",
        professional:
          "অর্থনীতির প্রভাষক (ঢাকা কলেজ, দিনাজপুর ও ঠাকুরগাঁও সরকারি কলেজ), পরিদর্শন ও নিরীক্ষা অধিদপ্তরের ইন্সপেক্টর, রাষ্ট্রপতি জিয়াউর রহমানের অধীনে উপ-প্রধানমন্ত্রীর ব্যক্তিগত সচিব।",
        milestones: [
          {
            year: "১৯৬৯",
            event:
              "ছাত্র আন্দোলন - পূর্ব পাকিস্তান ছাত্র ইউনিয়ন ঢাকা বিশ্ববিদ্যালয় শাখার সভাপতি",
          },
          { year: "১৯৮৮", event: "ঠাকুরগাঁও পৌরসভার চেয়ারম্যান নির্বাচিত" },
          {
            year: "১৯৯২",
            event: "বিএনপিতে যোগদান ও ঠাকুরগাঁও জেলা বিএনপির সভাপতি",
          },
          {
            year: "২০০১",
            event: "ঠাকুরগাঁও–১ আসন থেকে সংসদ সদস্য ও প্রতিমন্ত্রী নির্বাচিত",
          },
          {
            year: "২০১৬-বর্তমান",
            event: "মহাসচিব, বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)",
          },
        ],
      },
    },
    commitments: [
      {
        title: "স্বাস্থ্যসেবা, এখনই",
        description:
          "সদর হাসপাতালকে জনবল ও আধুনিক ইকুইপমেন্ট সমৃদ্ধ করা; মেডিক্যাল কলেজ ও পাবলিক বিশ্ববিদ্যালয় স্থাপনে মির্জা আলমগীর বদ্ধ পরিকর।",
      },
      {
        title: "যোগাযোগে নবজাগরণ",
        description:
          "বিমানবন্দর চালুর উদ্যোগ, ভাঙা রাস্তাঘাট-ড্রেনেজ মেরামত, অরক্ষিত লেভেল ক্রসিং ও প্ল্যাটফর্ম নিরাপদ করা এবং টিকিট কালোবাজারি বন্ধ।",
      },
      {
        title: "চাকরি ও ব্যবসার সাহস",
        description:
          "ছোট-মাঝারি উদ্যোক্তাদের সহজ ঋণ, নতুন শিল্প আনা, চাঁদাবাজি দমন— যুবকেরা কাজ পাবে নিজের জেলাতেই।",
      },
      {
        title: "শিক্ষার ভিত মজবুত",
        description:
          "সরকারি বিশ্ববিদ্যালয় ও কারিগরি প্রশিক্ষণ কেন্দ্র স্থাপন; মেয়েদের পড়াশোনা ও নিরাপদ যাতায়াতে বিশেষ সহায়তা।",
      },
      {
        title: "কৃষকের ন্যায্যতা",
        description:
          "ফসলের ন্যায্য দাম, আধুনিক সেচ ও সংরক্ষণ; টাঙ্গন নদীকে উদ্ধার— দখল-দূষণ বন্ধ।",
      },
      {
        title: "সুশাসন ও ডিজিটাল সেবা",
        description:
          "জমি-নিবন্ধনসহ সরকারি সেবা দ্রুত ও স্বচ্ছ করা; গ্রাম-শহর জুড়ে ইন্টারনেট ও মোবাইল নেটওয়ার্ক বিস্তৃত।",
      },
      {
        title: "নিরাপদ সমাজ",
        description:
          "মাদক ও অপরাধের বিরুদ্ধে কঠোর ব্যবস্থা; পুনর্বাসন ও খেলাধুলা-সংস্কৃতির মাধ্যমে তরুণদের সামনে ইতিবাচক পথ।",
      },
    ],
    achievements: [
      {
        title: "ঠাকুরগাঁও কেন্দ্রীয় মসজিদ পুনর্নির্মাণ",
        description:
          "২০২৫ সালের এপ্রিল মাসে প্রায় ৩৪ কোটি টাকার ছয়তলা বিশিষ্ট আধুনিক মসজিদ ভবন প্রকল্পের উদ্বোধন; ধর্মীয় কার্যক্রমের পাশাপাশি কমিউনিটি সেবা ও শিক্ষার সুযোগ।",
        year: "২০২৫",
      },
      {
        title: "বরেন্দ্র ভূগর্ভস্থ সেচ প্রকল্প",
        description:
          "১,৩৩৭টি টিউবওয়েলকে ভূগর্ভস্থ পাইপলাইন নেটওয়ার্কে রূপান্তর; জমি ও পানির সাশ্রয় নিশ্চিতকরণ এবং ৫০ একর নতুন জমি কৃষিযোগ্যকরণ।",
        year: "২০০৫",
      },
      {
        title: "টেকনিক্যাল ট্রেনিং সেন্টার ও পলিটেকনিক",
        description:
          "গোবিন্দনগরে ৮.২২ কোটি টাকা ব্যয়ে টেকনিক্যাল ট্রেনিং সেন্টার ও পলিটেকনিক ইন্সটিটিউট স্থাপন; কারিগরি শিক্ষার প্রসার।",
        year: "২০০১-২০০৬",
      },
      {
        title: "ডিজিটাল অ্যাক্সেস ও ওয়াই-ফাই",
        description:
          "ঠাকুরগাঁও শহরে বিনামূল্যে ওয়াই-ফাই জোন চালু; যা বর্তমানে দেশব্যাপী একটি মডেল উদ্যোগ হিসেবে বিবেচিত।",
        year: "২০২৫",
      },
      {
        title: "ক্রীড়া উন্নয়ন ও জিয়া মেমোরিয়াল",
        description:
          "জিয়া মেমোরিয়াল ফুটবল টুর্নামেন্ট চালু এবং যুবসম্পৃক্ততা পুনরুজ্জীবিত করতে নিয়মিত ক্রীড়া প্রতিযোগিতা।",
        year: "২০২৪",
      },
      {
        title: "শিক্ষা ও অবকাঠামো (ESDO)",
        description:
          "১২৬০টি গভীর নলকূপ স্থাপন, গ্রামীণ সড়ক ও সেতু নির্মাণ এবং বেসরকারি শিক্ষা প্রতিষ্ঠান এমপিওভুক্তকরণ। মির্জা আলমগীর ESDO-এর প্রতিষ্ঠাতা চেয়ারম্যান।",
        year: "১৯৯১-২০০৬",
      },
    ],
    contributions: {
      national: [
        {
          title: "কৃষি যান্ত্রিকীকরণ",
          description:
            "কৃষি যান্ত্রিকীকরণ ও সেচ সুবিধা সম্প্রসারণে নীতিগত ও প্রাতিষ্ঠানিক উদ্যোগ গ্রহণ।",
        },
        {
          title: "রপ্তানিমুখী কৃষি",
          description: "রপ্তানিমুখী কৃষি শিল্প ও গ্রামীণ উন্নয়নকে উৎসাহিত করা।",
        },
        {
          title: "বিমানবন্দর অবকাঠামো",
          description:
            "বেসামরিক বিমান প্রতিমন্ত্রী হিসেবে বিমানবন্দর অবকাঠামো উন্নয়ন এবং আঞ্চলিক সংযোগ বৃদ্ধি।",
        },
        {
          title: "ইকো-ট্যুরিজম",
          description: "উত্তরাঞ্চল পর্যটন উন্নয়ন ও ইকো-ট্যুরিজম উদ্যোগ প্রচার।",
        },
      ],
      local: [
        {
          title: "সড়ক ও সেতু",
          description:
            "দূরবর্তী গ্রামগুলোকে সংযুক্ত করতে নতুন গ্রামীণ সড়ক ও সেতু নির্মাণ।",
        },
        { title: "বিদ্যুৎ", description: "গ্রামীণ বিদ্যুতায়নের আওতা বৃদ্ধি।" },
        {
          title: "আইন–শৃঙ্খলা ও সুশাসন",
          description:
            "জাতীয় পর্যায়ে দুর্নীতি দমন কমিশন প্রতিষ্ঠা, যার প্রভাব স্থানীয় প্রশাসনে ইতিবাচক ভূমিকা রাখে।",
        },
      ],
    },
    contact: {
      address: "ঠাকুরগাঁও অফিস, বিএনপি কার্যালয় রোড, ঠাকুরগাঁও।",
      phone: "+৮৮০ ১৭০০-০০০০০০",
      email: "info@alamgirfortomorrow.com",
    },
  },
  en: {
    name: "Mirza Fakhrul Islam Alamgir",
    displayTitle: "Alamgirfortomorrow",
    title: "Member of Parliament, Thakurgaon-1",
    party: "Secretary General, Bangladesh Nationalist Party (BNP)",
    constituency: "Thakurgaon-1",
    slogan: "Towards a New Day — Thakurgaon",
    hero: {
      tagline: "Journey Towards Freedom: A New Era in Thakurgaon",
      subline:
        "Safeguarding your home, your neighborhood, and your district is our responsibility. People are the power.",
      cta: "Report a Problem",
      quote:
        "We want a state that has the capacity to realize the dreams of its citizens. Safeguarding your home is our duty.",
    },
    about: {
      title:
        "Mirza Fakhrul Islam Alamgir: A Life of Politics and Public Service",
      subtitle:
        "A journey of continuous struggle and service from the 1969 student movement to national leadership",
      content:
        "From the 1969 student movement to serving as Chairman of Thakurgaon Municipality, Member of Parliament, State Minister, and since 2016, Secretary General of BNP—his long journey is a unique blend of intellectual firmness, grassroots movement, and national leadership.",
      history:
        "He served successfully as the Mayor of Thakurgaon from 1988 to 1990. He was an Economics lecturer at Thakurgaon Govt College and founder chairman of ESDO.",
      fullBio: {
        birth: "January 26, 1948, Thakurgaon",
        education:
          "Dhaka College (HSC), University of Dhaka (BSS & MSS in Economics)",
        professional:
          "Lecturer in Economics, Inspector at D&I, Private Secretary to Deputy PM under President Ziaur Rahman.",
        milestones: [
          {
            year: "1969",
            event:
              "Student Movement - President of East Pakistan Student Union, DU branch",
          },
          {
            year: "1988",
            event: "Elected Chairman of Thakurgaon Municipality",
          },
          {
            year: "1992",
            event: "Joined BNP and became President of Thakurgaon District BNP",
          },
          {
            year: "2001",
            event: "Elected MP from Thakurgaon-1 and appointed State Minister",
          },
          {
            year: "2016-Present",
            event: "Secretary General, Bangladesh Nationalist Party (BNP)",
          },
        ],
      },
    },
    commitments: [
      {
        title: "Healthcare, Now",
        description:
          "Strengthening Sadar Hospital with manpower and modern equipment; committed to establishing Medical College.",
      },
      {
        title: "Transport Revolution",
        description:
          "Initiatives to reopen the airport, repair broken roads/drainage, and secure level crossings.",
      },
      {
        title: "Jobs & Business",
        description:
          "Easy loans for SME, bringing new industries, suppressing extortion—youth will find work locally.",
      },
      {
        title: "Strong Education",
        description:
          "Establishing universities and technical training centers; special support for girls' education.",
      },
      {
        title: "Fairness for Farmers",
        description:
          "Fair prices for crops, modern irrigation, and saving the Tangon river from pollution.",
      },
      {
        title: "Good Governance",
        description:
          "Fast and transparent land registration and govt services; expanding internet connectivity.",
      },
      {
        title: "Safe Society",
        description:
          "Strict measures against drugs and crime; positive path for youth through sports & culture.",
      },
    ],
    achievements: [
      {
        title: "Reconstruction of Thakurgaon Central Mosque",
        description:
          "Inauguration of a 6-story modern mosque project worth 34 crore BDT in April 2025.",
        year: "2025",
      },
      {
        title: "Barendra Underground Irrigation",
        description:
          "Transformation of 1,337 tubewells into underground pipeline networks, saving land and water.",
        year: "2005",
      },
      {
        title: "Technical Training Center",
        description:
          "Established TTC and Polytechnic in Gobindanagar for technical education expansion.",
        year: "2001-2006",
      },
      {
        title: "Digital Access & Wi-Fi",
        description:
          "Launched free Wi-Fi zones in Thakurgaon city, now a nationwide model.",
        year: "2025",
      },
      {
        title: "Sports & Zia Memorial",
        description:
          "Launched Zia Memorial Football Tournament to re-engage youth in sports.",
        year: "2024",
      },
      {
        title: "Education & Infrastructure (ESDO)",
        description:
          "MPOs for private schools/colleges, road and bridge construction through ESDO.",
        year: "1991-2006",
      },
    ],
    contributions: {
      national: [
        {
          title: "Agri Mechanization",
          description:
            "Policy initiatives for agricultural mechanization and irrigation expansion.",
        },
        {
          title: "Export-oriented Agri",
          description:
            "Encouraged export-oriented agricultural industries and rural development.",
        },
        {
          title: "Airport Infrastructure",
          description:
            "Infrastructure development and regional connectivity during tenure as State Minister.",
        },
        {
          title: "Eco-Tourism",
          description:
            "Promoted tourism development and eco-tourism in Northern region.",
        },
      ],
      local: [
        {
          title: "Roads & Bridges",
          description:
            "Construction of rural roads and bridges to connect remote villages.",
        },
        {
          title: "Electricity",
          description: "Expanded coverage of rural electrification.",
        },
        {
          title: "Governance",
          description:
            "Established Anti-Corruption Commission at national level, benefiting local administration.",
        },
      ],
    },
    contact: {
      address: "Thakurgaon Office, BNP Office Road, Thakurgaon.",
      phone: "+880 1700-000000",
      email: "info@alamgirfortomorrow.com",
    },
  },
  social: {
    facebook: "https://www.facebook.com/MirzaAlamgir/",
    twitter: "https://x.com/BNPSGOffice",
  },
};
