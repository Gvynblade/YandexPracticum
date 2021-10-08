import React from 'react';
import styles from './feed-right.module.scss';

const FeedRightColumn = ({orders, total, totalToday}) => {

    let ordersSuccess = {col1: [], col2: []}
    let ordersInProgress = {col1: [], col2: []}

    if ( orders.length > 0 ) {

        let succes = []
        let inProgress = []

        orders.forEach( item => {
            item.status === "done" ? succes.push(item) : inProgress.push(item)
        })

        if (succes.length > 10) {

            let succes1 = []
            let success2 = []

            succes.forEach( (item, index) => {

                index < 10 && succes1.push(<p className={`${styles.ordersList__item} ${styles.ready} text text_type_digits-default pt-2`} key={index}>{item.number}</p>)
                index >= 10 && index < 20 && success2.push(<p className={`${styles.ordersList__item} ${styles.ready} text text_type_digits-default pt-2`} key={index}>{item.number}</p>)
            })

            ordersSuccess = {col1: succes1, col2: success2}

        } else {

            succes.forEach( (item, index) => {

                ordersSuccess.col1.push(<p className={`${styles.ordersList__item} ${styles.ready} text text_type_digits-default pt-2`} key={index}>{item.number}</p>)
            })

        }


        if (inProgress.length > 10) {

            let inProgress1 = []
            let inProgress2 = []

            inProgress.forEach( (item, index) => {

                index < 10 && inProgress1.push(<p className={`${styles.ordersList__item} text text_type_digits-default pt-2`} key={index}>{item.number}</p>)
                index >= 10 && index < 20 && inProgress2.push(<p className={`${styles.ordersList__item} text text_type_digits-default pt-2`} key={index}>{item.number}</p>)
            })

            ordersInProgress = { col1: inProgress1, col2: inProgress2}

        } else {

            inProgress.forEach( (item, index) => {

                ordersInProgress.col1.push(<p className={`${styles.ordersList__item} text text_type_digits-default pt-2`} key={index}>{item.number}</p>)
            })

        }

    }

    return (
        <section className={styles.feedColumn}>
            <div className={`${styles.ordersList} mb-15`}>
                <div className={styles.ordersList__ready}>

                    <p className={`${styles.ordersList__header} text text_type_main-medium pb-4`}>
                        Готовы:
                    </p>
                    <div className={styles.ordersList__col1}>{ordersSuccess.col1}</div>
                    <div className={styles.ordersList__col2}>{ordersSuccess.col2}</div>
                </div>
                <div className={styles.ordersList__inProgress}>

                    <p className={`${styles.ordersList__header} text text_type_main-medium pb-4`}>
                        В работе:
                    </p>
                    <div className={styles.ordersList__col1}>{ordersInProgress.col1}</div>
                    <div className={styles.ordersList__col2}>{ordersInProgress.col2}</div>
                </div>
            </div>

            <p className="text text_type_main-medium">
                Выполнено за все время:
            </p>

            <p className={`${styles.ordersCounter} text text_type_digits-large mb-15`}>{total}</p>

            <p className="text text_type_main-medium">
                Выполнено за сегодня:
            </p>

            <p className={`${styles.ordersCounter} text text_type_digits-large`}>{totalToday}</p>

        </section>
    )
}

export default FeedRightColumn
