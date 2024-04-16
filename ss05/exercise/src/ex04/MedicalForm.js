import React, {useState} from "react";
import {Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.css';
import * as Yup from 'yup';
import {toast} from "react-toastify";
import './ex04.css'

export default function MedicalForm() {
    const [form, setForm] = useState({})
    const change = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const validate = () => {
        const REGEX = /^[a-zA-Z0-9-+_]+@[a-zA-Z0-9-+]+.com$/;
        let err = {};
        if (!form.name) {
            err.name = "required"
        }
        if (!form.cmnd) {
            err.cmnd = "required"
        }
        if (!form.yob) {
            err.yob = "required"
        } else if (form.yob <= 1900) {
            err.yob = "Year of birth must be greater than 1900 until now"
        }
        if (!form.country) {
            err.country = "required"
        }
        if (!form.company) {
            err.company = "required"
        }
        if (!form.division) {
            err.division = "required"
        }
        if (!form.province) {
            err.province = "required"
        }
        if (!form.district) {
            err.district = "required"
        }
        if (!form.wards) {
            err.wards = "required"
        }

        if (!form.address) {
            err.address = "required"
        }
        if (!form.phone) {
            err.phone = "required"
        }
        if (!form.email) {
            err.email = "required"
        } else if (!REGEX.test(form.email)) {
            err.email = "Invalid email address"
        }


        if (!form.check1) {
            err.check1 = "required"
        }

        return err;
    }
    const submit = () => {
        toast.success("Đã gửi đến cơ quan có thẩm quyền")
    }
    return (
        <div>
            <h2>Tờ khai y tế: </h2>
            <Formik initialValues={form}
                    onSubmit={submit}
                    validate={validate}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                            <label>Họ tên</label>
                            <input name="name" value={form.name} onChange={change}/>
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>

                        <div className={`custom-input ${errors.cmnd ? "custom-input-error" : ""}`}>
                            <label>Số hộ chiếu/CMND </label>
                            <input name="cmnd" value={form.cmnd} onChange={change}/>
                            {errors.cmnd && <span className="error">{errors.cmnd}</span>}
                        </div>

                        <div className={`custom-input ${errors.yob ? "custom-input-error" : ""}`}>
                            <label>Năm sinh</label>
                            <input type='number' name="yob" value={form.yob} onChange={change}/>
                            {errors.yob && <span className="error">{errors.yob}</span>}
                        </div>

                        <div className={'radio'}>
                            <label>Giới tính</label>
                            <label><input type={"radio"} name="gender" value="0" onChange={change} checked/>Nam</label>
                            <label><input type={"radio"} name="gender" value="1" onChange={change}/>Nữ</label>
                            {errors.gender && <span className="error">{errors.gender}</span>}
                        </div>

                        <div className={`custom-input ${errors.country ? "custom-input-error" : ""}`}>
                            <label>Quốc tịch</label>
                            <input name="country" value={form.country} onChange={change}/>
                            {errors.country && <span className="error">{errors.country}</span>}
                        </div>

                        <div className={`custom-input ${errors.company ? "custom-input-error" : ""}`}>
                            <label>Công ty làm việc</label>
                            <input name="company" value={form.company} onChange={change}/>
                            {errors.company && <span className="error">{errors.company}</span>}
                        </div>

                        <div className={`custom-input ${errors.division ? "custom-input-error" : ""}`}>
                            <label>Bộ phận làm việc</label>
                            <input name="division" value={form.division} onChange={change}/>
                            {errors.division && <span className="error">{errors.division}</span>}
                        </div>

                        <div className={'checkbox'}>
                            <label>Có thẻ bảo hiểm y tế
                                <input type={"checkbox"} name="hadCard" value={form.hadCard} onChange={change}/></label>
                        </div>
                        <br/>

                        <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                        <div className={`custom-input ${errors.province ? "custom-input-error" : ""}`}>
                            <label>Tỉnh thành</label>
                            <input name="province" value={form.province} onChange={change}/>
                            {errors.province && <span className="error">{errors.province}</span>}
                        </div>

                        <div className={`custom-input ${errors.district ? "custom-input-error" : ""}`}>
                            <label>Quận/huyện</label>
                            <input name="district" value={form.district} onChange={change}/>
                            {errors.district && <span className="error">{errors.district}</span>}
                        </div>

                        <div className={`custom-input ${errors.wards ? "custom-input-error" : ""}`}>
                            <label>Phường/xã</label>
                            <input name="wards" value={form.wards} onChange={change}/>
                            {errors.wards && <span className="error">{errors.wards}</span>}
                        </div>

                        <div className={`custom-input ${errors.address ? "custom-input-error" : ""}`}>
                            <label>Số nhà, phố, tổ dân phố/ thôn/ đội</label>
                            <input name="address" value={form.address} onChange={change}/>
                            {errors.address && <span className="error">{errors.address}</span>}
                        </div>

                        <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                            <label>Điện thoại</label>
                            <input name="phone" value={form.phone} onChange={change}/>
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>

                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input name="email" value={form.email} onChange={change}/>
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>


                        <div className={`custom-input ${errors.check1 ? "custom-input-error" : ""}`}>
                            <label className={'strong'}>Trong vòng 14 ngày qua, Anh/Chị có đên quốc gia/vùng lãnh thổ
                                nào (có thể đi qua
                                nhiều quốc gia).</label>
                            <textarea name="check1" value={form.check1} onChange={change}/>
                            {errors.check1 && <span className="error">{errors.check1}</span>}
                        </div>

                        <div className={'checkbox'}>
                            <label className={'strong'}>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào
                                sau đây không
                                ?.</label>
                            <label><input type="checkbox" name="check2" value="0" onChange={change}/>Sốt</label>
                            <label><input type="checkbox" name="check2" value="0" onChange={change}/>Ho</label>
                            <label><input type="checkbox" name="check2" value="0" onChange={change}/>Khó thở</label>
                            <label><input type="checkbox" name="check2" value="0" onChange={change}/>Viêm phổi</label>
                            <label><input type="checkbox" name="check2" value="0" onChange={change}/>Đau họng</label>
                            <label><input type="checkbox" name="check2" value="0" onChange={change}/>Mệt mỏi</label>
                        </div>
                        <br/>

                        <div className={'checkbox'}>
                            <label className={"strong"}>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với ?.</label>
                            <label><input type="checkbox" name="check3" value="0" onChange={change}/>Người bệnh hoặc
                                nghi ngờ, mắc bệnh COVID-19</label>
                            <label><input type="checkbox" name="check3" value="1" onChange={change}/>Người từ nước có
                                COVID-19</label>
                            <label><input type="checkbox" name="check3" value="2" onChange={change}/>Người có biểu hiện
                                sốt, ho, khó thở</label>
                        </div>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}
