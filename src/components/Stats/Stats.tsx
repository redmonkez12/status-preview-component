type Props = {
    title: string;
    description: string;
};

export function Stats({ title, description }: Props) {
    return (
        <div className={"flex flex-col uppercase font-bold"}>
            <div className={"leading-[1.813rem] text-2xl"}>{title}</div>
            <div className={"font-normal text-xs tracking-[0.063rem] leading-[1.563rem] opacity-60"}>{description}</div>
        </div>
    );
}