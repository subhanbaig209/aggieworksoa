import './button.css';
interface IActivity {
    activity: string;
  
  }
  
  interface Props {
    handleClick: () => Promise<void>;
    activity?: IActivity;
  }
  
  const ActivityButton: React.FC<Props> = ({ handleClick, activity }) => {
    return (
      <div className="container">
        <button onClick={handleClick} className="big-red-button">
          I'm bored!
        </button>
        {activity && (
          <div className="activity">
            <p className="activity-text">{activity.activity}</p>
          </div>
        )}
      </div>
    );
  };
  export default ActivityButton;
