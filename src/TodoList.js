import React from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem } from './reducers/items'

export class TodoList extends React.Component {
  state = { name: '', color: '' }

  static getDerivedStateFromProps(props, state) {
    if (props.color && props.color !== state.color)
      return { color: props.color }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { items, name } = this.state
    this.props.dispatch(addItem(name))
    this.setState({ name: '' })
  }

  deleteItem = (index) => {
    this.props.dispatch(removeItem(index))
  }

  render() {
    const { name, color } = this.state
    const { items } = this.props
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label
            style={ color ? { backgroundColor: color } : {} }
          >
            Add A Todo
          </label>
          <input
            name="name"
            value={name}
            required
            onChange={this.handleChange}
            placeholder="Add Item"
          />
          <ul>
            { items.map( (item, i) => 
                <li key={i}>
                  {item}
                  {' '}
                  <span 
                    style={{ color: 'red'}} 
                    onClick={() => this.deleteItem(i)}
                  >
                    X
                  </span>
                </li> 
              ) 
            }
          </ul>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(TodoList)

