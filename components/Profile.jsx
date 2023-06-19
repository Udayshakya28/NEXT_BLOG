import PromptCard from "./PromptCard";
import Loader from "./loader";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      {
        // isloading ? <Loader /> :

        <div className='mt-10 prompt_layout'>
          {data.map((post) => (
            <PromptCard
              key={post._id}
              ID={post._id}
              data={post}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
      }
    </section>
  );
};

export default Profile;

