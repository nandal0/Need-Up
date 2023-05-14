import style from "./NotFound.module.css";
import loginlogo from "../assets/images/logos/loginlogo.png";
const NotFound = () => {
    return<>
        <div className={style['not-found']}>
            <h2>{`Sorry, It's 404.`}</h2>
            <img className={style['not-found__img']} src={loginlogo} />
        </div>
    </>

}
export default NotFound;