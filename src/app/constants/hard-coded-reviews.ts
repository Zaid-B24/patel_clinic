interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}


export const fallbackReviews: Review[] = [
  {
    author_name: "Meghana Joshi",
    rating: 5,
    text: "As a loyal customer for the past ten years, I can wholeheartedly say that Dr. Patel Medical and Pathology Lab has consistently delivered exceptional service marked by professionalism, accuracy, and genuine care. Their dedication to timely diagnostics, clear communication, and patient-centered support has built a foundation of trust that is rare to find. Every interaction reflects not only their medical expertise but also their compassion and commitment to excellence. It is truly commendable how they have maintained such high standards over the years, making me feel valued and cared for at every step. I deeply appreciate their constant support and look forward to continuing this trusted relationship.",
    relative_time_description: "6 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjU_aa3wlEcorm3iWDHYuuVHOTBr7J8ULn1Ry4pk15jTTBzS6znatg=w36-h36-p-rp-mo-ba12-br100",
  },
  {
    author_name: "Irrfan Shaikh",
    rating: 5,
    text: "Patel Hospital & Pathology provides excellent service with high-quality treatment and reliable care. The staff is professional and supportive, and the blood tests are accurate and trustworthy, carried out using modern, well-equipped technology. A dependable place for both diagnosis and treatment. Dr. Zabee Patel: A highly skilled and compassionate doctor who truly prioritizes patient care.",
    relative_time_description: "6 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUgE7fbf3LT0HygyStx6pquqgscd2uq_XSCiCbBrrmBWLLJzeeOxg=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    author_name: "AZLAN'S The Exotic's",
    rating: 5,
    text: "I recently admitted my grandmother here, and our experience was very positive. The hospital was clean, well-maintained, and hygienic throughout. The staff was highly active, cooperative, and attentive, which made a stressful situation much easier to handle. One of the biggest advantages was the in-house pathology lab, which made getting tests done quick and hassle-free. Overall, the service and facilities were excellent. I truly appreciate the care and support provided.",
    relative_time_description: "3 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjX8oorgMAtIg2W0up1H-KY3PBoS630CzCXpyLAEGkG0OFeFdMhG=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    author_name: "Aniket chavan",
    rating: 5,
    text: "I did CBC CRP HIV creatinine lipid profile liver function test vitamin test allergy test and full body profile my experience at Dr Patel Hospital and Pathology Lab was great and the staff was very polite and I received all the updates on my phone I consulted Dr Zabee Patel and was satisfied with the diagnosis treatment and counselling I also had a talk with the pathologist Dr Nida Patel for blood test report explanation",
    relative_time_description: "6 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJhah5minxrw2lotnv16n7WtfVwJz-IE__N3GaoXq05XwDt0g=w72-h72-p-rp-mo-br100",
  },
  {
    author_name: "Dr. Mrs. Ashwini Rahane",
    rating: 5,
    text: "We would like to sincerely appreciate Dr. Patel Sir for his excellent treatment and medical guidance. His accurate diagnosis, polite nature, and cooperative attitude reflect not only his professional expertise but also his compassion towards patients. Throughout the treatment, he made our family feel comfortable, explained everything clearly, and provided the best possible care. We are truly grateful for his dedication, patience, and outstanding service.",
    relative_time_description: "8 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXDLdGpBXV2Y9QYy5OP9xT_ZAhsFopv_ckJTcg2nkDitAI-7DM7=w72-h72-p-rp-mo-br100",
  },
  {
    author_name: "Zishan Khan",
    rating: 5,
    text: "Timely service, accurate diagnosis, kind and helpful staff. Azhar sir from management team is always available to help",
    relative_time_description: "6 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJM3X5aB_Itjd-DMQeCwcIavWO5-tXiErjuQbuet6NM1QUSbg=w72-h72-p-rp-mo-ba12-br100",
  }
];