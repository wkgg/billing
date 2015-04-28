var BillingInput = React.createClass({
    handleSubmit: function(e){
      this.props.onUserInput(
        this.refs.name.getDOMNode().value,
        this.refs.thing.getDOMNode().value,
        this.refs.money.getDOMNode().value
      );
      this.refs.name.getDOMNode().value = ""
      this.refs.thing.getDOMNode().value = ""
      this.refs.money.getDOMNode().value = ""
      return false;
    },
    render:function(){
      return(
        <form onSubmit={this.handleSubmit}>
          who:<input type='text' ref="name"/>what:<input type='text' ref='thing'/>money:<input type='text' ref='money'/>元
          <button type='submit'>OK</button>
        </form>
      );
    }
});

var BillingOutput = React.createClass({
    render:function(){
      rows = []

      this.props.items.forEach(function(item){
        rows.push(<div>{item.name} 买 {item.thing} 花了 {item.money}元</div>)
      });

      return(
        <div>
            {rows}
        </div>
      );
    }
});

var Billing = React.createClass({
    handleUserInput: function(name, thing, money){
      items = this.state.items;
      items.push({name: name, thing: thing, money: money});
      console.log("1111")
      this.setState({
        items: items
      });
    },
    getInitialState: function(){
      return({
        items:[]
      });
    },
    render: function(){
      console.log("222")
      return(
        <div>
          <BillingInput onUserInput={this.handleUserInput}/>
          <BillingOutput items={this.state.items}/>
        </div>
      );
    }
});

React.render(<Billing />, document.getElementById('billing'))
