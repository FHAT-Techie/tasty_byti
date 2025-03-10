export default function EventComponent({
  Day = "Monday",
  EventName = "EVENT NAME",
}) {
return (
 <div className="EventComponent">
    <p>{Day}</p>
    <h2>{EventName }</h2>
 </div>
)


}
