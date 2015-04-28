var BillingInput = React.createClass({displayName: "BillingInput",
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
        React.createElement("form", {onSubmit: this.handleSubmit}, 
          "who:", React.createElement("input", {type: "text", ref: "name"}), "what:", React.createElement("input", {type: "text", ref: "thing"}), "money:", React.createElement("input", {type: "text", ref: "money"}), "元", 
          React.createElement("button", {type: "submit"}, "OK")
        )
      );
    }
});

var BillingOutput = React.createClass({displayName: "BillingOutput",
    render:function(){
      rows = []

      this.props.items.forEach(function(item){
        rows.push(React.createElement("div", null, item.name, " 买 ", item.thing, " 花了 ", item.money, "元"))
      });

      return(
        React.createElement("div", null, 
            rows
        )
      );
    }
});

var Billing = React.createClass({displayName: "Billing",
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
        React.createElement("div", null, 
          React.createElement(BillingInput, {onUserInput: this.handleUserInput}), 
          React.createElement(BillingOutput, {items: this.state.items})
        )
      );
    }
});

React.render(React.createElement(Billing, null), document.getElementById('billing'))
