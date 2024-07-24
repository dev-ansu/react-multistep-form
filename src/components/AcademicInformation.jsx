import {useFormContext} from "react-hook-form" 


const AcademicInformation = ()=>{
    const {register, setValue, formState:{errors}} = useFormContext();
    
    return (
        <>
            <div className="form-group">
                <div className="w-100 d-flex flex-column gap-2">
                    <label className="fs-4" htmlFor="">Escolaridade:*</label>
                    <select {...register('escolaridade', {required:true})} name="escolaridade" id="" className="form-select">
                        <option value="">Selecione uma opção</option>
                        <option value="Ensino fundamental completo">Ensino fundamental completo</option>
                        <option value="Ensino fundamental incompleto">Ensino fundamental incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Pós-graduação lato-sensu">Pós-graduação lato-sensu</option>
                        <option value="Mestrado">Mestrado</option>
                        <option value="Doutorado">Doutorado</option>
                    </select>
                    {errors?.escolaridade && <span>{errors.escolaridade.message}</span>}

                </div>
                <div className="form-group">
                    <label className="fs-4" htmlFor="">Curso:*</label>
                    <input {...register('curso', {required:true})} placeholder="Digite aqui o nome do curso que fez, ex: Ciência da computação, Administração, Ensino médio, etc.." className="form-control" type="text" name="curso" />
                    {errors?.curso && <span>{errors.curso.message}</span>}
                </div>

            </div>
        </>
    )
}

export default AcademicInformation;