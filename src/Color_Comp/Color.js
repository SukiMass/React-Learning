// import"./style.css"
// the style keyword used to access module color to style particular tag using className
import styles from"./Color.module.css"
function Color() {
    return (
        <>
        {/* Inline styling */}
            {/* <h1 style={{color : 'red'}} >This is a Color Code</h1>
            <p style={{backgroundColor : 'green'}}>This is super style</p> */}
            <h1 className={styles.anime} >This is a Color Code</h1>
            <p className={styles.singham}>This is super style</p>
        </>

    );
}

export default Color