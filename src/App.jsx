import { useState } from 'react'
import styles from './app.module.css';
import data from './data.json';


export const App = () => {

const [steps, setSteps] = useState(data);
const [activeIndex, setActiveIndex] = useState(0);

const goBack = () => {
	if(activeIndex > 0){// если больше 0 то актив - 1
		setActiveIndex (activeIndex - 1)
	}
};
const goForvard = () =>{// Проверяем, что текущий индекс меньше последнего элемента массива steps
	if(activeIndex < steps.length -1){
		setActiveIndex(activeIndex + 1) // Увеличиваем activeIndex на 1
	}
};
const comeback = () =>{ // возврат
		setActiveIndex(0)
};
const firstStepBlock = activeIndex === 0 ? true : false;
const lastStepBlock = activeIndex === steps.length - 1 ? true : false;
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}

					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({title , id}, index) =>(
						<li
						key ={id}
						className={styles['steps-item'] + (index === activeIndex ? `${styles.active}` : '') + (index < activeIndex ? `${styles.done}` : '')
						 }
						 >
						<button
						className={styles['steps-item-button']} onClick={()=> setActiveIndex(index)}>
								{index +1}
							</button>{''}
							{title}
						</li>
						))}
					</ul>

					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={goBack}
						disabled ={firstStepBlock}>Назад</button>
						<button className={styles.button} onClick={()=> lastStepBlock ? comeback() : goForvard()}>
						{lastStepBlock ? 'начать сначала' : 'далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};


export default App
