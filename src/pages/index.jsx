import Container from "@/ui/container";
import { useState } from "react";
// import dbPromise, { jsonify } from "@/modules/db";

export default function HomePage({ users }) {
  const [quests, setQuests] = useState([]);
  return (
    <Container className="my-16 text-gray-900 text-xl flex items-center justify-center">
      <div className="w-[250px] h-[500px] rounded-xl bg-white py-10 px-6">
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-6 h-6 rounded-md border-2 border-gray-800" />
          <div className="flex-grow">
            <p className="font-[500] text-base">Text</p>
          </div>
          <div className="w-6 text-sm text-gray-600 bg-gray-300 rounded-md p-[3px] aspect-[1/1] flex items-center justify-center">
            12
          </div>
        </div>

        <div className="h-3" />

        <div className="text-gray-600 flex gap-4 items-center cursor-pointer">
          <div className="w-6 text-sm text-gray-600 bg-gray-300 rounded-md p-[3px] aspect-[1/1] flex items-center justify-center">
            +
          </div>
          <div className="text-base flex-grow">add a quest</div>
          <div className="flex gap-1">
            <div className="w-6 text-sm text-gray-600 bg-gray-300 rounded-md p-[3px] aspect-[1/1] flex items-center justify-center">
              X
            </div>
            <div className="w-6 text-sm text-gray-600 bg-gray-300 rounded-md p-[3px] aspect-[1/1] flex items-center justify-center">
              E
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
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
