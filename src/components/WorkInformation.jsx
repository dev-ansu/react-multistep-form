import { useData } from "../contexts/DataContext";
import { useFormContext } from "react-hook-form";
const WorkInformation = ()=>{
    const {register, setValue, formState:{errors}} = useFormContext();
    
    return (
        <div className="form-group">
            <div className="w-100 d-flex flex-column gap-2">
                <label className="fs-4" htmlFor="">Objetivo profissional:*</label>
                <span>Com o que você gostaria de trabalhar? Exemplo: administração, TI, comercial, RH</span>
                <input {...register('objetivo_profissional', {required:true})} placeholder="Digite aqui o seu objetivo profissional" className="form-control" type="text"  name="objetivo_profissional" />
                {errors?.objetivo_profissional && <span>{errors.objetivo_profissional.message}</span>}
            </div>
            <div className="w-100 d-flex flex-column gap-2">
                <label className="fs-4" htmlFor="">Você trabalha atualmente?*</label>
                <select {...register('trabalha_atualmente', {required:true})} name="trabalha_atualmente" id="" className="form-select">
                    <option value="">Selecione uma opção</option>
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                </select>
                {errors?.trabalha_atualmente && <span>{errors.trabalha_atualmente.message}</span>}

            </div>
        </div>
    );
}


export default WorkInformation;