import { useState } from "react"
import PersonalInformation from "./components/PersonalInformation"
import AcademicInformation from "./components/AcademicInformation"
import ContactInformation from "./components/ContactInformation"
import { useData } from "./contexts/DataContext"
import "./style.css";
import WorkInformation from "./components/WorkInformation"
import { useForm, FormProvider } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod";
import { toast } from 'react-toastify';
import ListSteps from "./components/ListSteps"
import talentos from "./assets/talentos.png";

const phoneRegex = /^\(?\d{2}\)?[\s-]?(\d{4,5})[\s-]?(\d{4})$/;
const schema = z.object({
  nome: z.string().min(1, "O campo é obrigatório"),
  sexo:z.string().min(1, "O campo é obrigatório").refine((data) => data.toUpperCase() === "M" || data.toUpperCase() === "F", {
    message: "Escolha entre masculino e feminino."
  }),
  estado_civil:z.string().refine((data)=> {
    const options ='SOLTEIRO(A),CASADO(A),DIVORCIADO(A),VIÚVO(A)'.split(",");
    if(options.includes(data.toUpperCase())){
      return data;
    }
  }, 'Escolha uma das opções'),
  data_nascimento: z.string().date('Preencha com uma data válida.'),
  sobrenome: z.string().min(1, "O campo sobrenome é obrigatório."),
  whatsapp: z.string().regex(phoneRegex, 'O número digitado não é válido.'),
  telefone: z.string().regex(phoneRegex, 'O número digitado não é válido.'),
  email: z.string().email("Digite um e-mail válido"),
  escolaridade: z.string().min("1", 'Escolha uma das opções.'),
  objetivo_profissional: z.string().min(1, "Preencha o seu objetivo profissional"),
  trabalha_atualmente: z.string().min(1, "Este campo é obrigatório").refine( data => data.toUpperCase() === 'S' || data.toUpperCase() === 'N' ? data:false),
  curso: z.string().min(1, "Digite o nome do curso")
});

function App() {
  const [data, setData] = useState();
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, setValue, watch, trigger, formState: { errors }, clearErrors, register } = methods;

 
 
  const [steps, setAllStep] = useState([
    {
      title:"Informações pessoais",
      icon:<i className="bi bi-person-circle"></i>,
      validations:['nome', 'sobrenome','data_nascimento','estado_civil','sexo'],
      element: <PersonalInformation />
    },
    {
      title:"Informações de contato",
      icon:<i className="bi bi-telephone-fill"></i>,
      validations:['whatsapp', 'telefone','email'],
      element: <ContactInformation  />
    },
    {
      title:"Informações acadêmicas",
      icon:<i className="bi bi-mortarboard-fill"></i>,
      validations:['escolaridade', 'curso'],
      element: <AcademicInformation />
    },
    {
      title:"Informações profissionais",
      icon:<i className="bi bi-suitcase-lg-fill"></i>,
      validations:['trabalha_atualmente', 'objetivo_profissional'],
      element: <WorkInformation />
    }
  ]);

  const [step, setStep] = useState(0);
  const [ableSave, setAbleSave] = useState(false);
  

  
  const nextStep = async ()=>{
      let test = await trigger(steps[step].validations);
      if(test){
        if(step < steps.length - 1){
          setStep(step + 1);
        }else{
          setAbleSave(true);
        }
      }
      
  }  

  const prevStep = ()=>{
    if(step >= 1){
        setStep(step - 1);
    }
  } 
 

  const onSubmit = (data)=>{
    data.data_cadastro = new Date().toLocaleDateString('pt-BR').split("/").reverse().join("-")
    setData(data);
  }

  const handleSetStepByClick = async(step)=>{
      setStep(step);
  }

  return (
    <div className="container-fluid">
      <div className="container">
          <img id="logo-mais-talentos" src={talentos} alt="Imagem do mais talentos"></img>
          <h4>Entre para o nosso banco de talentos</h4>
          <hr></hr>
          <FormProvider {...methods}>
            <div id="container-form-steps" className="d-flex gap-4">
              <ListSteps handleSetStepByClick={handleSetStepByClick} steps={steps} actualStep={step} />
              <form onSubmit={methods.handleSubmit(onSubmit)} className="steps">
                {step + 1}/{steps.length}
                <span>{steps[step].title} {steps[step].icon}</span>
                {steps[step].element}
                <div className="d-flex gap-2">
                  {!(step >= 1) || <span className="btn btn-secondary"  onClick={prevStep}><i className="bi fs-5 bi-caret-left-fill"></i></span>}
                  {(steps.length - 1 <= step) || <span className="btn btn-primary justify-content-center align-items-center d-flex" onClick={nextStep}>Próximo<i className="bi fs-5 bi-caret-right-fill"></i></span>}
                  {(!ableSave && steps.length - 1 > step) || <button className="btn btn-success btn-lg">Salvar <i className="bi bi-floppy2"></i></button>}
                </div>
              </form>
              <div className="text-white">
              {!data || JSON.stringify(data, null, 4)}
              </div>
            </div>
          </FormProvider>
        </div>
    </div>
  )
}

export default App
