# 🛠️ Dashboard Widget Management

This project is a dynamic dashboard that allows users to manage widgets. Users can click on categories to display associated widgets, which are rendered conditionally based on the selected category.

## 🚀  Features

Category Selection: Click on any category to view the associated widgets.
Dynamic Rendering: Widgets are dynamically rendered based on the selected category.
Responsive Design: The UI is designed to be responsive and user-friendly.

## 📂 Project Structure

| Directory     | Description                                                |
| ------------- | ---------------------------------------------------------- |
| `components/` | Reusable UI components like buttons, drawers, and widgets. |
| `App.js`      | Main entry point of the application.                       |
| `utils/`      | Utility functions such as `cn` (class name utility).       |
| `data/`       | JSON data for categories and widgets.                      |

---

## 📝 Usage

### 🛠️Setting Up the Project:

Clone the repository:
git clone [https://github.com/sachinkumar-1309/admin-dashboard.git](https://github.com/sachinkumar-1309/admin-dashboard.git)

#### Navigate into the project directory:

cd dashboard-widget-management

#### Install the dependencies:

npm install

#### Start the development server:

npm start

---

#### How It Works

Toggle Category: When a user clicks on a category button, the toggle function is called, storing the clicked category's id in the state variable itemClicked.
Display Widgets: The application maps through the categories and checks if itemClicked matches the id of the category. If it does, the corresponding widgets are displayed.

<!-- ## Example

Here's a simple example of how the main logic works:

const toggle = (id) => {
setItemClicked(id);
};

{categories.map((category) => (
<>
<button
onClick={() => toggle(category.id)}
className="gap-2 mr-2 abs inline-block text-sm bg-slate-50 px-3 py-2 rounded-md"
key={category.id} >
{category.name.split(" ")[0]}
</button>
</>
))}

{categories.map((category) => (
<>
{itemClicked === category.id && (

<div>
{category.widgets.map((widget) => (
<div key={widget.id}>{widget.name}</div>
))}
</div>
)}
</>
))} -->

#### 🔧  Dependencies

React: JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Vaul: Library for building UI components like drawers.

#### 🤝 Contributing
Contributions are welcome! If you have any ideas or improvements, feel free to submit a pull request.
