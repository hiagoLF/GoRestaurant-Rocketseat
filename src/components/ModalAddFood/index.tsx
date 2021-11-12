import { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FoodInterface } from "../../@types";

interface ModalAddFoodInterface {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Partial<FoodInterface>) => void;
}

const ModalAddFood: React.FC<ModalAddFoodInterface> = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    handleAddFood({
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
        <h1>Novo Prato</h1>
        <Input
          name="image"
          placeholder="Cole o link aqui"
          onChange={setImage}
        />

        <Input name="name" placeholder="Ex: Moda Italiana" onChange={setName} />
        <Input name="price" placeholder="Ex: 19.90" onChange={setPrice} />

        <Input
          name="description"
          placeholder="Descrição"
          onChange={setDescription}
        />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
