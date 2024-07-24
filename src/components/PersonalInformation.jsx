import {useData} from "../contexts/DataContext";
import {useFormContext} from "react-hook-form" 

const PersonalInformation = ()=>{
    const {register, setValue, formState:{errors}} = useFormContext();

    return (
        <div className="form-group">
            <h3>Informações pessoais <i className="bi text-secondary bi-person-circle"></i></h3>
            <div className="form-group d-flex gap-3">
                <div className="w-100 d-flex flex-column gap-2">
                    <label className="fs-4" htmlFor="">Nome*</label>
                    <input {...register('nome',{required:true})} placeholder="Digite seu nome" className="form-control" type="text" name="nome"  />
                    {errors?.nome && <span>{errors.nome.message}</span>}
                </div>
                <div className="w-100 d-flex flex-column gap-2">
                    <label className="fs-4" htmlFor="">Sobrenome:*</label>
                    <input {...register('sobrenome')} placeholder="Digite seu sobrenome" className="form-control" type="text"  name="sobrenome" />
                    {errors?.sobrenome && <span>{errors.sobrenome.message}</span>}
                </div>
            </div>
            <div className="w-100 d-flex flex-column gap-2">
                <label className="fs-4" htmlFor="">Data de nascimento:*</label>
                <input className="form-control" type="date" {...register("data_nascimento")}  name="data_nascimento" />
                {errors?.data_nascimento && <span>{errors.data_nascimento.message}</span>}

            </div>
            <div className="w-100 d-flex flex-column gap-2">
                <label className="fs-4" htmlFor="">Estado civil:*</label>
                <select {...register("estado_civil", {required:true})} name="estado_civil" id="" className="form-select">
                    <option value="">Selecione uma opção</option>
                    <option value="Solteiro(a)">Solteiro(a)</option>
                    <option value="Casado(a)">Casado(a)</option>
                    <option value="Divorciado(a)">Divorciado(a)</option>
                    <option value="Viúvo(a)">Viúvo(a)</option>
                </select>
                {errors?.estado_civil && <span>{errors.estado_civil.message}</span>}

            </div>
            <div className="form-group">
                <label className="fs-4" htmlFor="">Sexo*</label>
                <select {...register("sexo", {required:true})} name="sexo" id="" className="form-select">
                    <option value="">Selecione uma opção</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
                {errors?.sexo && <span>{errors.sexo.message}</span>}

            </div>
        </div>
    )

}

export default PersonalInformation;