
function Filters() {
    return (
       <div className="filter">
        <p>Поиск по названию</p>
        <input placeholder="Например: Новогодняя ёлка"/>
        <p>Фильтрация по цене</p>
        <input placeholder="Минимальная цена"/> <br/>
        <input placeholder="Максимальная цена"/>
        <p>Упорядочить по</p>
        <select>
            <option>Умолчанию</option>
            <option>Возрастанию цены</option>
            <option>Убыванию цены</option>
            <option>Алфавитному порядку (А-Я)</option>
            <option>Алфавитному порядку (Я-А)</option>
        </select><br/>
        <button className="button-filter">Показать</button>
       </div>    
    )
}

export default Filters
