import "./Contact.css";
import {useLanguage} from "../../../Providers/LanguageContext";

function Contact() {
    const {data} = useLanguage();
    return <div className={"Contact"}>
        <div id="content">
            <div id="content_left">
                <div id="content_top">
                    <h1>{data.contacts_hello1}</h1>
                    <h1>{data.contacts_hello2}</h1>
                    <h1>{data.contacts_hello3}</h1>
                </div>
                <p>{data.contacts_p1}</p>
                <p>{data.contacts_p2}</p>
                <p><span className="fa fa-home"></span>Lisboa, Portugal</p>
                <p><span className="fa fa-phone"></span>(+351) 910 116 613</p>
                <p><span className="fa fa-envelope"></span>eder.tolentino2020@gmail.com</p>
            </div>
            <div id="content_right">
                {/*<form action="contacts.php" method="post">
                    <input type="text" name="name" placeholder={data.contacts_formName}/>
                    <input type="email" name="email" placeholder={data.contacts_formEmail}/>
                    <textarea name="message" placeholder={data.contacts_formLabel}></textarea>
                    <input type="submit" name="send" value={data.contacts_send}/>
                </form>*/}
            </div>

        </div>
    </div>;
}

export default Contact