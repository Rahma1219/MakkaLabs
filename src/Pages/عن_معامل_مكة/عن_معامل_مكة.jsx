import { useState } from 'react'
import modules from './عن_معامل_مكة.module.css'


function عن_معامل_مكة() {

    const [show, setShow] = useState(false)

    function showcontent() {
        return (
            setShow(!show)
        )
    }



    return (
        <section className={modules.Aboutsec}>
            <div className={modules.container}>

                <div className={modules.para1}>
                    <div className={modules.content} >
                        <div className={modules.firstcontent}>
                            <h1>عن معامل مكة</h1>
                            <p> معامل مكة للتحاليل الطبية ـ Makka Labs
                                دقة... تستحق... الثقة  🔬<br />
                                <br />
                            </p>
                        </div>




                        <h4 className={modules.nametitle} > <span id={modules.des}>دكتور</span> / أحمد جابر عشماوى
                            <br />
                            مدير معامل مكة للتحاليل الطبية </h4>

                        <p className={modules.persondetails}>
                            دراسات عليا في الكيمياء الحيوية <br />
                            دراسات عليا في الميكروبيولوجيا التطبيقية<br />
                            عضو الجمعية المصرية للكيمياء الحيوية الباثولوجية وأبحاث الدم <br />
                            عضو الجمعية الأمريكية للميكروبيولوجى ASM
                        </p>

                        <button onClick={showcontent} className={show === false ? modules.moredetailsbtn : modules.moredetailsbtn2}> <span>  قراءة المزيد </span> </button>
                        {show &&
                            <ul className={modules.moredetails}>
                                <li > المعمل يقوم بعمل جميع أنواع التحاليل الطبية مع أدق النتائج و أعلى جودة بأقل سعر</li>
                                <li>المعمل مجهز بأحدث الأجهزة المعملية و التقنيات الحديثة لضمان صحة ودقة النتائج</li>
                                <li>المعمل يطبق نظام ادارة الجودة بداية من طلب التحليل وحتى استلام النتيجة</li>
                                <li>المعمل يطبق نظام الباركود والدائرة المغلقة لجميع العينات والربط بين أجهزة التحاليل وشبكة الكمبيوتر لمنع حدوث الخطأ البشري في ادخال العينات او كتابة النتائج</li>
                                <li>المعمل يعتمد على محاليل و كيماويات معتمدة من منظمة FDA </li>
                                <li>المعمل يتميز بعمل ملف لكل مريض يحتوي على كافة البيانات مع عمل تاريخ مرضى لكل مريض مع امكانية طباعة النتائج السابقة للمريض داخل التقرير الجديد</li>
                                <li>المعمل يطبق أعلى معايير ضبط الجودة ومكافحة العدوى</li>
                                <li>خصم 25% على جميع التحاليل الطبية مع عروض وخصومات مستمرة طول السنة</li>

                            </ul>
                        }

                    </div>

                </div>




                <div className={modules.para1}>
                    <div className={modules.content} >
                        <h1>رؤيتنا</h1>
                        <p id={modules.contentpara1}> تحقيق أعلى معايير الجودة من خلال استخدام أحدث التقنيات مع التطوير للأطباء والمرضي عند كل طلب لأحدى التحاليل الطبية</p>
                    </div>
                </div>


                <div className={modules.para1}>
                    <div className={modules.content} >
                        <h1 >قيمنا</h1>
                        <p id={modules.contentpara2}> . الأمانة والمصداقية <br />
                            . المحافظة على معايير الجودة <br />
                            . الكفاءةوالأحترام <br />
                        </p>
                    </div>
                </div>

                <div className={modules.para1}>
                    <div className={modules.content} >
                        <h1>الرسالة</h1>
                        <p id={modules.contentpara3}> أن نحقق رؤيتنا بالتزامنا بأعلى معايير الجودة باستخدام أحدث التكنولوجيا للمساعدة في تقديم تقارير ذات دقة عالية و تسليم النتائج في المواعيد المحددة و نسعى جاهدين لتحقيق التميز مع التطور المستمر من أجل عملائنا مع الأحترام و المصداقية المهنية </p>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default عن_معامل_مكة