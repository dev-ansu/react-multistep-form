import {useFormContext} from "react-hook-form" 
import InputMask from "react-input-mask"

const ContactInformation = ()=>{
    const {register, setValue, formState:{errors}} = useFormContext();

    return (
        <div className="form-group">
            <div className="d-flex gap-3">
                <div className="w-100 d-flex flex-column gap-2">
                    <label className="fs-4" htmlFor="">WhatsApp:*</label>
                    <InputMask {...register('whatsapp', {required:true})} className="form-control" placeholder="Digite seu WhatsApp" onChange={(e) => setValue("whatsapp", e.target.value, {shouldValidate:true})}  mask={'(99) 9999-9999'} />
                    {errors?.whatsapp && <span>{errors.whatsapp.message}</span>}
                </div>
                <div className="w-100 d-flex flex-column gap-2">
                    <label className="fs-4" htmlFor="">Telefone:*</label>
                    <InputMask {...register('telefone', {required:true})} className="form-control" placeholder="Digite seu WhatsApp" onChange={(e) => setValue("telefone", e.target.value, {shouldValidate:true})}  mask={'(99) 9999-9999'} />
                    {errors?.telefone && <span>{errors.telefone.message}</span>}
                </div>
            </div>
            <div className="w-100 d-flex flex-column gap-2">
                <label className="fs-4" htmlFor="">Email:*</label>
                <input {...register('email', {required:true})} placeholder="Digite seu email" className="form-control" type="email"  name="email" />
                {errors?.email && <span>{errors.email.message}</span>}
            </div>
        </div>
    )
}

export default ContactInformation;