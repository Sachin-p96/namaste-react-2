const ItemList = ({ item }) => {
  console.log(item, "heyItemMEnu");
  return (
    <>
      <div>{item.card.card.title}</div>
    </>
  );
};

export default ItemList;
