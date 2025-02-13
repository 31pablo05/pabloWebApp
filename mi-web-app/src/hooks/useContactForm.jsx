import { useState, useCallback } from "react";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback(() => {
    if (!formData.name.trim()) {
      setError("Por favor, ingresa tu nombre.");
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Por favor, ingresa un mensaje.");
      return false;
    }
    return true;
  }, [formData]);

  const handleSubmit = async (e, url) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error en el servidor");

      setStatus("¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setError("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus("");
        setError("");
      }, 3000);
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return {
    formData,
    status,
    error,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
