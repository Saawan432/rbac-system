import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

interface AddRoleModalProps {
  closeModal: () => void;
  onAdd: (roleData: { name: string; permissions: string[] }) => void;
}

const AddRoleModal: React.FC<AddRoleModalProps> = ({ closeModal, onAdd }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      permissions: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Role name is required'),
      permissions: Yup.string().required('Permissions are required'),
    }),
    onSubmit: (values) => {
      const permissionsArray = values.permissions.split(',').map((p) => p.trim());
      onAdd({ name: values.name, permissions: permissionsArray });
      toast.success("Roile added")
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Add Role</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Role Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="p-2 w-full border"
            />
            {formik.errors.name && <div>{formik.errors.name}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="permissions" className="block text-sm font-medium mb-2">
              Permissions (comma separated)
            </label>
            <input
              id="permissions"
              name="permissions"
              type="text"
              value={formik.values.permissions}
              onChange={formik.handleChange}
              className="p-2 w-full border"
            />
            {formik.errors.permissions && <div>{formik.errors.permissions}</div>}
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-400 text-white p-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white p-2">
              Add Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoleModal;
