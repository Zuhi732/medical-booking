const Blogs = () => {
  return (
    <div className="my-10 px-4 md:px-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        MedicalApp Blogs
      </h2>

      <div className="space-y-6">
        {/* Question 1 */}
        <div className="collapse collapse-arrow bg-base-200 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            1. What is `useState` and how does it work in React?
          </div>
          <div className="collapse-content bg-white">
            <p className="pt-4">
              <strong>useState</strong> is a React Hook that allows us to add
              state to function components. It returns an array with two
              elements: the current state value and a function to update that
              value.
              <br />
              <br />
              When the state update function is called, React re-renders the
              component with the new state value, updating the UI to reflect the
              changes. It preserves this state between re-renders.
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-arrow bg-base-200 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            2. What is the purpose of `useEffect` in React?
          </div>
          <div className="collapse-content bg-white">
            <p className="pt-4">
              <strong>useEffect</strong> is used to handle "side effects" in
              React components. Side effects include things like fetching data
              from an API, directly updating the DOM, setting up subscriptions,
              or timers.
              <br />
              <br />
              It runs after the component renders. By passing a dependency array
              (second argument), we can control when it runs (e.g., only on
              mount, or when specific variables change).
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className="collapse collapse-arrow bg-base-200 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            3. What is a custom hook in React and when should you use one?
          </div>
          <div className="collapse-content bg-white">
            <p className="pt-4">
              A <strong>custom hook</strong> is a JavaScript function that
              starts with "use" and calls other hooks inside it. It allows you
              to extract component logic into reusable functions.
              <br />
              <br />
              <strong>When to use:</strong> You should use it when you have
              logic (like fetching data, handling forms, or managing local
              storage) that is repeated across multiple components. It keeps
              components clean and DRY (Don't Repeat Yourself).
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div className="collapse collapse-arrow bg-base-200 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            4. Difference between controlled and uncontrolled components? Which
            one is better?
          </div>
          <div className="collapse-content bg-white">
            <p className="pt-4">
              <strong>Controlled Components:</strong> Form data is handled by
              the React component (using state). The input's value is controlled
              by React state.
              <br />
              <strong>Uncontrolled Components:</strong> Form data is handled by
              the DOM itself (using refs). You access values directly from the
              DOM element.
              <br />
              <br />
              <strong>Which is better?</strong> Controlled components are
              generally recommended in React because they support instant field
              validation, conditional disabling, and better integration with
              other UI elements.
            </p>
          </div>
        </div>

        {/* Question 5 */}
        <div className="collapse collapse-arrow bg-base-200 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            5. Tell us something about `useFormStatus()`
          </div>
          <div className="collapse-content bg-white">
            <p className="pt-4">
              <strong>useFormStatus</strong> is a new hook in React (available
              in Canary/Next.js versions) that gives you status information
              about the last form submission.
              <br />
              <br />
              It returns an object with properties like <code>
                pending
              </code>{" "}
              (boolean), <code>data</code>, <code>method</code>, and{" "}
              <code>action</code>. It is extremely useful for showing loading
              states in buttons or form elements automatically without manually
              creating loading states with useState. It must be used inside a
              component rendered within the form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
