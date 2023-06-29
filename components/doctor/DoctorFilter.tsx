import { AllEducationalInstitutions } from '@/types/institution/institution-detail';
import FilterComponent from './FilterComponent';
import FilterSpecialityComponent from './FilterSpecialityComponent';

interface DoctorFilterProps {
  allSpecialities: string[];
  allEducationalInstitutions: AllEducationalInstitutions[];
  selectedSpeciality: string[];
  selectedEducation: string;
  selectedExperience: string;
  onSpecialityChange: (value: string[]) => void;
  onEducationChange: (value: string) => void;
  onExperienceChange: (value: string) => void;
  setSpeciality : (speciality: string) => void;
}

const DoctorFilter: React.FC<DoctorFilterProps> = ({
  allSpecialities,
  allEducationalInstitutions,
  selectedSpeciality,
  selectedEducation,
  selectedExperience,
  onSpecialityChange,
  onEducationChange,
  onExperienceChange,
  setSpeciality
}) => {
  const handleSpecialityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    onSpecialityChange(selectedOptions);
  };

  var educations: string[] = [];
  for (let i=0; i < allEducationalInstitutions.length;i++){
    educations.push(allEducationalInstitutions[i].institutionName);
  }

  const filters = [
    {
      label: "Experience",
      values: ["0","1", "2","3", "4", "5", "6", "7", "8", "9", "10"],
      selected: selectedExperience,
      onSelectedChange : onExperienceChange
    },

    {
      label: "Education",
      values: educations,
      selected: selectedEducation,
      onSelectedChange : onEducationChange
    },

  ]

  return (
    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center space-x-4 mt-4 ml-2">
        <FilterSpecialityComponent  values={allSpecialities} label = {"Speciality"} selected = {selectedSpeciality} setSpeciality = {setSpeciality} />
    {
      filters.map((item, index) => {
        return   <FilterComponent key={index} values={item.values} label = {item.label} selected = {item.selected} onSelectedChange = {item.onSelectedChange} />

      })

    }

   
    </div>
  );
};

export default DoctorFilter;
