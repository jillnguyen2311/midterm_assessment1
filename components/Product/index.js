import Image from "next/image";
import styles from '@/Components/Product/product.module.css';

export default function Product({
    img="",
    tag="",
    price=0
}) {
    
    return (
        <div className={styles.products}> 
           <Image
        src={img}
        alt="image"
        width={200}
        height={200}
            />

        <div>
            {tag}
        </div>

        <div>
            {price}
        </div>

        </div>
        
    )

}