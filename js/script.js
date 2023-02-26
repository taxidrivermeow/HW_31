class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {countNumber: 0}
    }

    minusButtonHandler = () => {
        const currentState = {...this.state};
        currentState.countNumber = (currentState.countNumber - 1) < 0 ? 0 : currentState.countNumber - 1;
        this.setState({currentState, countNumber: currentState.countNumber});
    }

    plusButtonHandler = () => {
        const currentState = {...this.state};
        currentState.countNumber = (currentState.countNumber + 1) > 255 ? 255 : currentState.countNumber + 1;
        this.setState({currentState, countNumber: currentState.countNumber});
    }

    render() {
        return (
            <div className={'card'}>
                <h2>Counter</h2>
                <button onClick={this.minusButtonHandler}>-</button>
                <span>{'Count: '}</span>
                <span>{this.state.countNumber}</span>
                <button onClick={this.plusButtonHandler}>+</button>
            </div>
        );
    }
}

class AdvancedCounter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {countNumber: 0}
    }

    minusButtonHandler = () => {
        const currentState = {...this.state};
        currentState.countNumber = (currentState.countNumber - 1) < 0 ? 0 : currentState.countNumber - 1;
        this.setState({currentState, countNumber: currentState.countNumber});
    }

    plusButtonHandler = () => {
        const currentState = {...this.state};
        currentState.countNumber = (currentState.countNumber + 1) > 255 ? 255 : currentState.countNumber + 1;
        this.setState({currentState, countNumber: currentState.countNumber});
    }

    inputValueChangeHandler = (e) => {
        const currentState = {...this.state};
        const newValue = +e.target.value;
        if (typeof newValue === 'number' && !isNaN(newValue)) {
            if (newValue >= 0 && newValue < 256) {
                this.setState({currentState, countNumber: +e.target.value});
            }
        }
    }

    render() {
        return (
            <div className={'card'}>
                <h2>Advanced Counter</h2>
                <button onClick={this.minusButtonHandler}>-</button>
                <input onChange={this.inputValueChangeHandler} type={'number'} defaultValue={0} min={0} max={255} value={this.state.countNumber}></input>
                <button onClick={this.plusButtonHandler}>+</button>
            </div>
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<div className={'container'}>
                <Counter />
                <AdvancedCounter />
            </div>);