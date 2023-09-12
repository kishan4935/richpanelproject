
import Button from "@/components/Button";
import Card from "@/components/Card";

const DisconnectPage = () => {
  return (
    <main className="bg-[#1e4d91] h-screen flex justify-center items-center ">
      <Card>
        <h2 className="text-center mb-4">Facebook Page Integration</h2>
        <p className="text-center mb-4">
          Integrated Page : <span className="text-bold">Amazon Business</span>
        </p>
        <Button style="bg-[#dd5442]">Delete Integration</Button>
        <Button style="bg-[#1e4d91]">Reply To Messages</Button>
      </Card>
    </main>
  );
}

export default DisconnectPage