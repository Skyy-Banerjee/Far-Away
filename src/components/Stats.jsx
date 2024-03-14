export default function Stats({ items }) {
    const totalItemsCount = items.length
    const packedItemsCount = items.filter(item => item.packed).length;
    const packedPercentage = Math.round(totalItemsCount === 0 ? 0 : (packedItemsCount / totalItemsCount) * 100);
    return <footer className="stats">
        {(!totalItemsCount) && <p className="footer">Try adding some items to your packing list!🤔</p>}
        {packedPercentage === 100.00 && <em>💼 All items packed..💯 You're good to go! 🚀</em>}
        {(packedPercentage < 100.00 && totalItemsCount > 0) && <em>💼 You have {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} on your list, you already packed {packedPercentage} (%) approx.</em>}
    </footer>
}