import MenuItems from './MenuItems'

const Menu = ({ items }) => {
  return (
    <section className="section-center">
      {items.map((item) => {
        return <MenuItems key={item.id} {...item} />
      })}
    </section>
  )
}

export default Menu
