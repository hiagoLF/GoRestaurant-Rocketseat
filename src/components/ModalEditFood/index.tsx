import { useEffect, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FoodInterface } from "../../@types";

interface ModalEditFoodInterface {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood?: FoodInterface;
  handleUpdateFood: (data: Partial<FoodInterface>) => void;
}

const ModalEditFood: React.FC<ModalEditFoodInterface> = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(editingFood?.name || "");
    setImage(editingFood?.image || "");
    setDescription(editingFood?.description || "");
    setPrice(editingFood?.price || "");
  }, [editingFood]);

  const handleSubmit = async () => {
    handleUpdateFood({
      name,
      image,
      price,
      description,
    });
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Editar Prato</h1>
        <Input
          name="image"
          placeholder="Cole o link aqui"
          value={image}
          onChange={setImage}
        />

        <Input
          name="name"
          placeholder="Ex: Moda Italiana"
          value={name}
          onChange={setName}
        />
        <Input
          name="price"
          placeholder="Ex: 19.90"
          value={price}
          onChange={(text) => setPrice(text)}
        />

        <Input
          name="description"
          placeholder="Descrição"
          value={description}
          onChange={setDescription}
        />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
