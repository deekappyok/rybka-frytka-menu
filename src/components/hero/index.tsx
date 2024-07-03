import Image from 'next/image';
import Wrapper from '../layout/wrapper';
import style from './hero.module.scss'

import line from '/public/assets/line.png'
import PocketBase from 'pocketbase';

import getData, { IData, IItem } from '../../data/data';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const pb = new PocketBase('http://127.0.0.1:8090');
(async () => {
    try {
    await pb.admins.authWithPassword("kontakt@rybkafrytka.mielno.pl", "Prezesowa$");
    pb.autoCancellation(false);
    } catch(e){}    
})();


let last = Date.now();
const Hero = () => {

    
    

    const [soup, setSoup] = useState<any[]>([]);
    const [fish, setFish] = useState<any[]>([]);
    const [main_course, setMainCourse] = useState<any[]>([]);
    const [kids_meal, setKidsMeal] = useState<any[]>([]);
    const [extras, setExtras] = useState<any[]>([]);
    const [cold_drinks, setColdDrinks] = useState<any[]>([]);
    const [warm_drinks, setWarmDrinks] = useState<any[]>([]);
    const [beer, setBeer] = useState<any[]>([]);
    
    const load = () => {
        const seconds = new Date().getSeconds();
        if(seconds > 15 && seconds < 30 || seconds > 45 && seconds < 60){
            setDrinks(true);
        }else {
            setDrinks(false);
        }

        // allow every 5 seconds
        if(Date.now() - last < 5_000){
            console.log("skipped");
            return;
        }

        // toast with custom css
        toast(<>
            <div className={style.notify}>
                <div>
                    <h3>Smakowało?</h3>
                    <h5>Podziel się opinią na Google Maps</h5>
                </div>
                <div>
                    <Image src="/assets/frame.png" width={180} height={180} alt="google" />
                </div>
            </div>
        </>, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            className: style.toast,
            bodyClassName: style.toast__content
        });

        last = Date.now();
        console.log("loading");        
    
        try {
            pb.collection("menu")?.getFullList(999).then(res => {
            let tempSoup: any[] = [];
            let tempFish: any[] = [];
            let tempMainCourse: any[] = [];
            let tempKidsMeal: any[] = [];
            let tempExtras: any[] = [];
            let tempColdDrinks: any[] = [];
            let tempWarmDrinks: any[] = [];
            let tempBeer: any[] = [];

            
            res.forEach(item => {
                switch (item.category) {
                    case "soup":
                        tempSoup.push(item);
                        break;
                    case "fish":
                        tempFish.push(item);
                        break;
                    case "main":
                        tempMainCourse.push(item);
                        break;
                    case "kids":
                        tempKidsMeal.push(item);
                        break;
                    case "extras":
                        tempExtras.push(item);
                        break;
                    case "cold_drinks":
                        tempColdDrinks.push(item);
                        break;
                    case "hot_drinks":
                        tempWarmDrinks.push(item);
                        break;
                    case "beer":
                        tempBeer.push(item);
                        break;
                    default:
                        break;
                }
            }

            )
            setSoup(tempSoup
                .filter(item => item.status)
                .sort((a, b) => a.sort - b.sort));
            setFish(tempFish
                .filter(item => item.status)
                .sort((a, b) => a.sort - b.sort));
            setMainCourse(tempMainCourse
                .filter(item => item.status)
                .sort((a, b) => a.sort - b.sort));
            setKidsMeal(tempKidsMeal
                .filter(item => item.status)
                .sort((a, b) => a.sort - b.sort));
            setExtras(tempExtras
                .filter(item => item.status)
                .sort((a, b) => a.sort - b.sort));
            setColdDrinks(tempColdDrinks
                .filter(item => item.status)
                .sort((a, b) => a.sort - b.sort));
            setWarmDrinks(tempWarmDrinks
                .filter(item => item.status)
                .sort((a, b) => a.sort - b.sort));
            setBeer(tempBeer
                .filter(item => item.status)
                .sort((a, b) => a.sort - b.sort));

            console.log("loaded");
        })
        } catch(e){
            console.log(e);
        }
    }

    setTimeout(() => {
        load();
    }, 1_000);
    let loading:any = null;


    useEffect(() => {
        // This code runs when the component mounts
        console.log("mounted");
        loading = setInterval(() => {
            load();
        }, 15_000);
        

        // add component istead of text
        toast(<>
            <div className={style.notify}>
                <div>
                    <h3>Smakowało?</h3>
                    <h5>Podziel się opinią na Google Maps</h5>
                </div>
                <div>
                    <Image src="/assets/frame.png" width={180} height={180} alt="google" />
                </div>
            </div>
        </>, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            className: style.toast,
            bodyClassName: style.toast__content
        });
    
        return () => {
            console.log("unmounted");
          // This code runs when the component unmounts
            clearInterval(loading);
        };
    }, []);
  
    const [drinks, setDrinks] = useState(true);



   

    return (
        <div>
            <Wrapper>
                <video autoPlay muted loop>
                    <source src="/assets/video3.mp4" />
                </video>
                <div className={style.hero_content}>
                    <div className={`${style.hero_content_element} ${style.hero_content_element_sides}`}>
                        <h1 className={style.hero_title}>
                            ZUPY
                            <Image className={style.hero_title_line} src={line} width={150} height={10} alt="line" />
                        </h1>
                        <div className={style.hero_list}>
                            {soup.map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className={style.hero_content_element_soup}>
                        <h1 className={style.hero_title}>
                            RYBY
                            <Image className={style.hero_title_line} src={line} width={150} height={10} alt="line" />
                        </h1>
                        {fish.map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                    </div>
                    <div className={style.hero_content_element_extras}>
                        <h1 className={style.hero_title}>
                            DODATKI
                            <Image className={style.hero_title_line} src={line} width={150} height={10} alt="line" />
                        </h1>
                        <div className={style.hero_content_element_extras_split}>
                            <div>
                                {/* half of data.extras */}
                                {extras.slice(0, extras.length / 2).map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name_smaller}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price_smaller}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div>
                                {/* half of data.extras */}
                                {extras.slice(extras.length / 2).map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name_smaller}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price_smaller}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* <div className={style.hero_content_element_sides}>
                        <h1 className={style.hero_title}>
                            PIEROGI
                            <Image className={style.hero_title_line} src={line} width={150} height={10} alt="line" />
                        </h1>
                        {data.sides.map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                    </div> */}
                    <div className={style.hero_content_element_food}>
                        <h1 className={style.hero_title}>
                            DANIA OBIADOWE 
                            {}
                            <Image className={style.hero_title_line} src={line} width={150} height={10} alt="line" />
                        </h1>
                        {main_course.map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                    </div>
                    {
                    
                    drinks 
                    ? (<>
                        <div className={style.hero_content_element_drinks_cold}>
                        {/* split in two cold and beer */}
                        
                        <div className={style.hero_content_element_drinks_cold_split}>
                            <div></div>
                            <div>
                                <h1 className={style.hero_title}>
                                    NAPOJE ZIMNE
                                    <Image className={style.hero_title_line} src={line} width={150} height={10} alt="line" />
                                </h1>
                                {cold_drinks.map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name_smaller}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price_smaller}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                    
                    <div className={style.hero_content_element_drinks_warm}>
                        <h1 className={style.hero_title}>
                            KAWA I HERBATA
                        </h1>
                        <Image className={style.hero_title_line} src={line} width={150} height={10} alt="line" />
                        {warm_drinks.map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name_smaller}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price_smaller}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                    </div>
                    </>) : (<>
                        <div className={style.hero_content_element_drinks_cold}>
                        {/* split in two cold and beer */}
                        
                        <div className={style.hero_content_element_drinks_cold_split}>
                            <div></div>
                            <div>
                                <h1 className={style.hero_title}>
                                    PIWO I WINO
                                    <Image className={style.hero_title_line} src={line} width={150} height={10} alt="line" />
                                </h1>
                                {beer.
                                    // first half of data.beer
                                    slice(0, beer.length / 2)
                                .map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name_smaller}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price_smaller}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                    
                    <div className={style.hero_content_element_drinks_warm}>
                        <h1 className={style.hero_title}>
                            {/* invisible symbol */}
                            <br />
                        </h1>
                        {
                        beer.
                            // second half of data.beer
                            slice(beer.length / 2)
                        .map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name_smaller}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price_smaller}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                    </div>
                    </>)}

                    <div className={style.hero_content_element_title}>
                        <Image src="/assets/logo.png" width={500} height={500} alt="logo" />
                    </div>
                    <div className={style.hero_content_element_kids}>
                        <h1 className={style.hero_title}>
                            DLA DZIECI                            
                        </h1>
                        <Image className={style.hero_title_line} src={line} width={150} height={10} alt="line" />
                        {kids_meal.map((item, index) => (
                                    <div className={style.hero_list_element} key={index}>
                                        <div className={style.hero_list_element_data}>
                                            <div className={style.hero_list_element_name}>
                                                {item.name}
                                            </div>
                                            <div className={style.hero_list_element_price}>
                                                {item.price} 
                                            </div>
                                        </div>
                                        {item?.description && ( 
                                            <p className={style.hero_list_element_description}>
                                                {item.description || ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                    </div>

                </div>
                <ToastContainer />

            </Wrapper>
        </div>
    )
}

export default Hero
