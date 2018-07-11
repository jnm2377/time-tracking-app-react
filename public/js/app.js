//PARENT ========================================
class TimersDashboard extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList/>
          <ToggleableTimerForm
            isOpen={true}
          />
        </div>
      </div>
    )
  }
}

//CHILD 1 ========================================
class EditableTimerList extends React.Component {
  render() {
    return (
      <div id='items'>
        <EditableTimer
          title='Learn React'
          project='Web Domination'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title='Learn extreme ironing'
          project='World Domination'
          elapsed='3247897'
          runningSince={null}
          editFormOpen={true}
        />
      </div>
    )
  }
}

//GRANDCHILD 1 ========================================
class EditableTimer extends React.Component {
  render() {
    if(this.props.editFormOpen) {
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
        />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
        />
      )
    }
  }
}
