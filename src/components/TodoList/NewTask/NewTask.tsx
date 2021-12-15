export const NewTask = () => {
    return (<div>
        <form>
            <label htmlFor="Task Status">
                <input type="checkbox" name="taskStatus"/>
            </label>

            <label htmlFor="New Task Text">
                <input type="text" name="taskInfo"/>
            </label>
        </form>
    </div>)
}