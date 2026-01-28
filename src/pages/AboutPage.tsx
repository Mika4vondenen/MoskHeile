import arbeitImage from '../../assets/arbeit.jpeg';

export default function AboutPage() {
  return (
    <div className="pt-32 bg-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        <img
          src={arbeitImage}
          alt="Unter Konstruktion"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
