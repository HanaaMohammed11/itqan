const About = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-islamic-blue">من نحن</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              إتقان هو منصة تعليمية إسلامية تهدف إلى نشر المعرفة الصحيحة للقرآن الكريم وعلوم الشريعة الإسلامية.
              تأسست المنصة لتكون مرجعاً موثوقاً للطلاب والمهتمين بالعلوم الإسلامية.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              نسعى لتقديم دورات عالية الجودة تساعد الطلاب على فهم الإسلام بشكل أعمق وتطبيقه في حياتهم اليومية.
              معلمونا هم من أهل الاختصاص والخبرة في مجالاتهم.
            </p>
            <p className="text-lg leading-relaxed">
              نؤمن بأن التعليم الإسلامي يجب أن يكون متاحاً للجميع، لذلك نقدم دوراتنا بأسعار مناسبة وطرق دفع مرنة.
            </p>
          </div>
          <div className="text-center">
            <img src="/images/hero.png"alt="About Itqan" className="rounded-lg shadow-lg mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;