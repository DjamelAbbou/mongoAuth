import Container from "@/ui/container";
import { useState } from "react";
// import dbPromise, { jsonify } from "@/modules/db";

export default function HomePage({ users }) {
  const Quest = WithRightTag(WithIcon(QuestName));
  const AddQuest = WithLeftTag(WithRightTag(QuestName));
  const [quests, setQuests] = useState([{ QuestName: "java", RightTag: 12 }]);

  return (
    <Container className="my-16 text-gray-900 text-xl flex items-center justify-center">
      <div className="w-[250px] h-[500px] rounded-xl bg-white py-10 px-6">
        <QuestsList {...{ quests }} />

        <div className="h-3" />

        <div className="flex items-center gap-2">
          <AddQuest RightTag="X" LeftTag="+">
            <span className="text-gray-600">Add a quest</span>
          </AddQuest>
        </div>
      </div>
    </Container>
  );
}

export function QuestsList({ quests }) {
  const Quest = WithRightTag(WithIcon(QuestName));
  return (
    <>
      {quests.map(({ QuestName, RightTag }) => (
        <div className="flex items-center gap-2">
          <Quest {...{ RightTag }}>{QuestName}</Quest>
        </div>
      ))}
    </>
  );
}

export function QuestName({ children }) {
  return <div className="text-base flex-grow">{children}</div>;
}

export function WithIcon(Component) {
  return function WrappedFunction({ ...rest }) {
    return (
      <>
        <div className="w-5 h-5 rounded-md border-2 border-gray-800" />
        <Component {...rest} />
      </>
    );
  };
}

export function WithRightTag(Component) {
  return function WrappedFunction({ RightTag, ...rest }) {
    return (
      <>
        <Component {...rest} />
        <div className="p-[3px] w-6 flex items-center justify-center text-sm rounded-md text-gray-600 bg-gray-300">
          {RightTag}
        </div>
      </>
    );
  };
}

export function WithLeftTag(Component) {
  return function WrappedFunction({ LeftTag, ...rest }) {
    return (
      <>
        <div className="p-[3px] w-6 flex items-center justify-center text-sm rounded-md text-gray-600 bg-gray-300">
          {LeftTag}
        </div>
        <Component {...rest} />
      </>
    );
  };
}

// export async function getServerSideProps({ ctx }) {
//   const users = await (await dbPromise)
//     .db()
//     .collection("users")
//     .find({})
//     .toArray();

//   return {
//     props: {
//       users: jsonify(users),
//     },
//   };
// }
// export function withValidations(Component) {
//   return function wrappedComponent({}) {
//     const [errors, setErrors] = useState([]);
//     return (
//       <>
//         <Component />
//         {errors.length > 0 && <div>{errors.join(", ")}</div>}
//       </>
//     );
//   };
// }
